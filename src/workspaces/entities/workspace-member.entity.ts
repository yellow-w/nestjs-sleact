import { CommonEntity } from "@src/common/entities/common.entity";
import { Users } from "src/users/entities/user.entity";
import { Workspaces } from "src/workspaces/entities/workspace.entity";
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, UpdateDateColumn } from "typeorm";

// @Index('UserId', ['UserId'], {})
@Entity('workspacemembers')
export class WorkspaceMembers extends CommonEntity{
  @Column('int', { primary: true, name: 'WorkspaceId' })
  WorkspaceId: number;

  @Column('int', { primary: true, name: 'UserId' })
  UserId: number;

  @Column('timestamp', { name: 'loggedInAt', nullable: true })
  loggedInAt: Date | null;

  @ManyToOne(() => Workspaces, (workspaces) => workspaces.WorkspaceMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'WorkspaceId', referencedColumnName: 'id' }])
  Workspace: Workspaces;

  @ManyToOne(() => Users, (users) => users.WorkspaceMembers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  User: Users;
}