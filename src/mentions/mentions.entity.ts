import { ChannelChats } from "src/channels/entities/channel-chat.entity";
import { CommonEntity } from "@src/common/entities/common.entity";
import { Users } from "src/users/entities/user.entity";
import { Workspaces } from "src/workspaces/entities/workspace.entity";
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// @Index('WorkspaceId', ['WorkspaceId'], {})
@Index('SenderId', ['SenderId'], {})
@Index('ReceiverId', ['ReceiverId'], {})
@Entity({ name: 'mentions' })
export class Mentions extends CommonEntity{
  @Column('enum', { name: 'category', enum: ['chat', 'dm', 'system'] })
  category: 'chat' | 'dm' | 'system';

  @Column('int', { name: 'ChatId', nullable: true })
  ChatId: number | null;
  @Column('int', { name: 'WorkspaceId', nullable: true })
  WorkspaceId: number | null;

  @Column('int', { name: 'SenderId', nullable: true })
  SenderId: number | null;

  @Column('int', { name: 'ReceiverId', nullable: true })
  ReceiverId: number | null;

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.Mentions, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
  Workspace: Workspaces;

  @ManyToOne(() => Users, (users) => users.Mentions, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SenderId', referencedColumnName: 'id' }])
  Sender: Users;

  @ManyToOne(() => Users, (users) => users.Mentions2, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ReceiverId', referencedColumnName: 'id' }])
  Receiver: Users;
}