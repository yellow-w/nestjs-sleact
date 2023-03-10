import { CommonEntity } from "@src/common/entities/common.entity";
import { Users } from "src/users/entities/user.entity";
import { Workspaces } from "src/workspaces/entities/workspace.entity";
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// @Index('WorkspaceId', ['WorkspaceId'], {})
@Index('dms_ibfk_2', ['SenderId'], {})
@Index('dms_ibfk_3', ['ReceiverId'], {})
@Entity({name: 'dms' })
export class DMs extends CommonEntity{
  @Column('text', { name: 'content' })
  content: string;

  @Column('int', { name: 'WorkspaceId', nullable: true })
  WorkspaceId: number | null;

  @Column('int', { name: 'SenderId', nullable: true })
  SenderId: number | null;

  @Column('int', { name: 'ReceiverId', nullable: true })
  ReceiverId: number | null;

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.DMs, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
  Workspace: Workspaces;

  @ManyToOne(() => Users, (users) => users.DMs, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'SenderId', referencedColumnName: 'id' }])
  Sender: Users;

  @ManyToOne(() => Users, (users) => users.DMs2, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ReceiverId', referencedColumnName: 'id' }])
  Receiver: Users;
}