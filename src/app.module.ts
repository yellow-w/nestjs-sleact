import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware'
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { MentionsModule } from './mentions/mentions.module';
import { CommonModule } from './common/common.module';
import { DataSource } from 'typeorm';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
  }), 
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    autoLoadEntities: true, // entities: ['entities/*.js]
    synchronize: false, //개발 환경일 때만 true. DB 생성 후에는 false 값으로 바꿔주자
    logging: true, //orm을 사용하는 경우의 개발환경에서는 logging을 켜두는 것이 좋다
    keepConnectionAlive: true,  //@deprecated 
  }),
  AuthModule,
  UsersModule, WorkspacesModule, ChannelsModule, DmsModule, MentionsModule, CommonModule, AuthModule
],
  controllers: [AppController,],
  providers: [AppService, ConfigService, AuthService],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer):any {
    consumer.apply(LoggerMiddleware).forRoutes('*')
    //forRoutes(컨트롤러) 또는 forRoutes(주소)로 특정 주소에만 미들웨어 적용 가능
  }
}
 