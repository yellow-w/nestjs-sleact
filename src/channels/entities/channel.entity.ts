import { CommonEntity } from "@src/common/entities/common.entity";
import { ChannelChats } from "src/channels/entities/channel-chat.entity";
import { ChannelMembers } from "src/channels/entities/channel-member.entity";
import { Users } from "src/users/entities/user.entity";
import { Workspaces } from "src/workspaces/entities/workspace.entity";
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// @Index('WorkspaceId', ['WorkspaceId'], {})
@Entity({ name: 'channels'})
export class Channels extends CommonEntity{
  @Column('varchar', { name: 'name', length: 30 })
  name: string;

  @Column('int', {
    name: 'private',
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  private: boolean | null;

  @Column('int', { name: 'WorkspaceId', nullable: true })
  WorkspaceId: number | null;

  @OneToMany(() => ChannelChats, (channelchats) => channelchats.Channel)
  ChannelChats: ChannelChats[];

  @OneToMany(() => ChannelMembers, (channelMembers) => channelMembers.Channel, {
    cascade: ['insert'],
  })
  ChannelMembers: ChannelMembers[];

  @ManyToMany(() => Users, (users) => users.Channels)
  Members: Users[];

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.Channels, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
  Workspace: Workspaces;
}
