import { Channels } from "src/channels/entities/channel.entity";
import { CommonEntity } from "@src/common/entities/common.entity";
import { DMs } from "src/dms/entities/dm.entity";
import { Mentions } from "src/mentions/mentions.entity";
import { Users } from "src/users/entities/user.entity";
import { WorkspaceMembers } from "src/workspaces/entities/workspace-member.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Index('name', ['name'], { unique: true })
@Index('url', ['url'], { unique: true })
@Index('OwnerId', ['OwnerId'], {})
@Entity({ name: 'workspaces' })
export class Workspaces extends CommonEntity{
  @Column('varchar', { name: 'name', unique: true, length: 30 })
  name: string;

  @Column('varchar', { name: 'url', unique: true, length: 30 })
  url: string;

  @Column('int', { name: 'OwnerId', nullable: true })
  OwnerId: number | null;

  @OneToMany(() => Channels, (channels) => channels.Workspace)
  Channels: Channels[];

  @OneToMany(() => DMs, (dms) => dms.Workspace)
  DMs: DMs[];

  @OneToMany(() => Mentions, (mentions) => mentions.Workspace)
  Mentions: Mentions[];

  @OneToMany(
    () => WorkspaceMembers,
    (workspacemembers) => workspacemembers.Workspace,
    { cascade: ['insert'] },
  )
  WorkspaceMembers: WorkspaceMembers[];

  @ManyToOne(() => Users, (users) => users.Workspaces, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'OwnerId', referencedColumnName: 'id' }])
  Owner: Users;

  @ManyToMany(() => Users, (users) => users.Workspaces)
  Members: Users[];
}