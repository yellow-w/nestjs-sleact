import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '@src/auth/auth.service';
import { LocalSerializer } from '@src/auth/local.serializer';
import { LocalStrategy } from '@src/auth/local.strategy';
import { Users } from '@src/users/entities/user.entity';

@Module({
  imports: [
    PassportModule.register({
      session: true, //jwt 사용해서 token 기반으로 할 경우 false값 주기
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  providers: [AuthService, LocalStrategy, LocalSerializer],
})
export class AuthModule {}
