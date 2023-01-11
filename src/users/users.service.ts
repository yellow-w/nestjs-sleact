import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '@src/users/entities/user.entity';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>
    ){}
    async join(email:string, nickname: string, password: string){
        if(!email){
            throw new HttpException('이메일을 입력해주세요', 400)
        }

        if(!nickname){
            throw new HttpException('닉네임을 입력해주세요',400)
        }

        if(!password){
            throw new HttpException('비밀번호를 입력해주세요',400)
        }

        const user = this.usersRepository.findOne({
            where: {email}
        })
        if(user){
            throw new Error('이미 존재하는 사용자입니다')
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        await this.usersRepository.save({
            email,
            nickname,
            password: hashedPassword
        })
    }
}
