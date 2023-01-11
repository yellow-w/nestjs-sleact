import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelChats } from 'src/channels/entities/channel-chat.entity';
import { ChannelMembers } from 'src/channels/entities/channel-member.entity';
import { Channels } from 'src/channels/entities/channel.entity';
import { ChannelsController } from './channels.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Channels, ChannelChats, ChannelMembers])],
  controllers: [ChannelsController],
  exports: [TypeOrmModule]
})
export class ChannelsModule {}
