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


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), UsersModule, WorkspacesModule, ChannelsModule, DmsModule],
  controllers: [AppController,],
  providers: [AppService, ConfigService],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer):any {
    consumer.apply(LoggerMiddleware).forRoutes('*')
    //forRoutes(컨트롤러) 또는 forRoutes(주소)로 특정 주소에만 미들웨어 적용 가능
  }
}
 