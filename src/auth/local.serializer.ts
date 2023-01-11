import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '@src/auth/auth.service';
import { Users } from '@src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(
    private readonly authService: AuthService,
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {
    super();
  }

  serializeUser(user: Users, done: CallableFunction) {
    done(null, user.id);
  }
  //serializeUser하게 되면 user 객체가 무거워짐
  //따라서 user의 아이디만 뽑아서 세션에 저장함

  async deserializeUser(userId: string, done: CallableFunction) {
    return await this.usersRepository
      .findOneOrFail({
        where: { id: +userId },
        select: ['id', 'email', 'nickname'],
        relations: ['Workspaces'],
      })
      .then((user: Users) => {
        console.log('user: ', user);
        done(null, user);
      })
      .catch((err) => done(err));
  }
  //req.user가 필요할 떄 마다 세션에 저장되어 있는 Id를 뽑아서 req.user에 복원 시켜 주는 과정
}
