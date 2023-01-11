import { CommonEntity } from "@src/common/entities/common.entity";
import { Channels } from "src/channels/entities/channel.entity";
import { Users } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, UpdateDateColumn } from "typeorm";


// @Index('UserId', ['UserId'], {})
@Entity({ name: 'channelmembers' })
export class ChannelMembers extends CommonEntity{
  @Column('int', { primary: true, name: 'ChannelId' })
  ChannelId: number;

  @Column('int', { primary: true, name: 'UserId' })
  UserId: number;

  @ManyToOne(() => Channels, (channels) => channels.ChannelMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ChannelId', referencedColumnName: 'id' }])
  Channel: Channels;

  @ManyToOne(() => Users, (users) => users.ChannelMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  User: Users;
}