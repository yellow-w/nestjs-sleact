import { ApiProperty } from "@nestjs/swagger";
import { ChannelChats } from "src/channels/entities/channel-chat.entity";
import { ChannelMembers } from "src/channels/entities/channel-member.entity";
import { Channels } from "src/channels/entities/channel.entity";
import { CommonEntity } from "@src/common/entities/common.entity";
import { DMs } from "src/dms/entities/dm.entity";
import { Mentions } from "src/mentions/mentions.entity";
import { WorkspaceMembers } from "src/workspaces/entities/workspace-member.entity";
import { Workspaces } from "src/workspaces/entities/workspace.entity";
import { Column, Entity, Index, JoinTable, ManyToMany, OneToMany} from "typeorm";
import { IsEmail, IsNotEmpty, IsString }from 'class-validator'


@Index('email', ['email'], { unique: true })
@Entity({ name: 'users' })
export class Users extends CommonEntity{
  @IsEmail()
  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @Column('varchar', { name: 'password', length: 100, select: false })
  password: string;

  @OneToMany(() => ChannelChats, (channelchats) => channelchats.User)
  ChannelChats: ChannelChats[];

  @OneToMany(() => ChannelMembers, (channelmembers) => channelmembers.User)
  ChannelMembers: ChannelMembers[];

  @OneToMany(() => DMs, (dms) => dms.Sender)
  DMs: DMs[];

  @OneToMany(() => DMs, (dms) => dms.Receiver)
  DMs2: DMs[];

  @OneToMany(() => Mentions, (mentions) => mentions.Sender)
  Mentions: Mentions[];

  @OneToMany(() => Mentions, (mentions) => mentions.Receiver)
  Mentions2: Mentions[];

  @OneToMany(
    () => WorkspaceMembers,
    (workspacemembers) => workspacemembers.User,
  )
  WorkspaceMembers: WorkspaceMembers[];

  @OneToMany(() => Workspaces, (workspaces) => workspaces.Owner)
  OwnedWorkspaces: Workspaces[];

  @ManyToMany(() => Workspaces, (workspaces) => workspaces.Members)
  @JoinTable({
    name: 'workspacemembers',
    joinColumn: {
      name: 'UserId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'WorkspaceId',
      referencedColumnName: 'id',
    },
  })
  Workspaces: Workspaces[];

  @ManyToMany(() => Channels, (channels) => channels.Members)
  @JoinTable({
    name: 'channelmembers',
    joinColumn: {
      name: 'UserId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ChannelId',
      referencedColumnName: 'id',
    },
  })
  Channels: Channels[];
}