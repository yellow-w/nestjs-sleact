import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '@src/users/entities/user.entity';
import bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor( 
            @InjectRepository(Users)
            private usersRepository: Repository<Users>
        ){}
    async validateUser(email: string, password: string){
        const user = await this.usersRepository.findOne({
            where: {
                email
            }
        })
        console.log(email, password, user);
        if(!user){
            return null;
        }

        const result = await bcrypt.compare(password, user.password);
        if(result){
            const {
                password,
                ...userWithoutPassword
            } = user;
            return userWithoutPassword;
        }
        return null;
    }
}
