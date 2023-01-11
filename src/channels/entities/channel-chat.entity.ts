import { CommonEntity } from '@src/common/entities/common.entity';
import { Channels } from 'src/channels/entities/channel.entity';
import { Mentions } from 'src/mentions/mentions.entity';
import { Users } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

// @Index('UserId', ['UserId'], {})
@Index('ChannelId', ['ChannelId'], {})
@Entity({ name: 'channelchats' })
export class ChannelChats extends CommonEntity{
  @Column('varchar', { name: 'content' })
  content: string;

  @Column('int', { name: 'UserId', nullable: true })
  UserId: number | null;

  @Column('int', { name: 'ChannelId', nullable: true })
  ChannelId: number | null;

  @ManyToOne(() => Users, (users) => users.ChannelChats, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  User: Users;

  @ManyToOne(() => Channels, (channels) => channels.ChannelChats, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ChannelId', referencedColumnName: 'id' }])
  Channel: Channels;
}