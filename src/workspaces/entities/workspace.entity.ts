import { Channel } from "src/channels/entities/channel.entity";
import { DateEntity } from "src/common/entities/date.entity";
import { DM } from "src/dms/entities/dm.entity";
import { User } from "src/users/entities/user.entity";
import { WorkspaceMember } from "src/workspaces/entities/workspace-member.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";

@Entity({
    schema: 'sleact',
    name: 'workspaces'
})
export class Workspace extends DateEntity {
    @Column('varchar',{name: 'name'})
    name: string

    @Column('varchar',{name: 'url'})
    url: string

    @Column('varchar',{name: 'OwnerId'})
    OwnerId: string

    @ManyToOne(()=> User, (user)=> user._Workspaces,{
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    })
    @JoinColumn([{
        name: 'OwnerId',
        referencedColumnName: 'id'
    }])
    _Owner: User;

    @ManyToMany(()=>User, (users)=> users._Workspaces)
    _Members: User[];

    @OneToMany(()=>WorkspaceMember, (workspacemembers)=> workspacemembers._Workspace,{
        cascade: ['insert']
    })
    _WorkspaceMembers: WorkspaceMember[];
    

    @OneToMany(()=> Channel, (channels)=> channels._Workspace)
    _Channels: Channel[];

    @OneToMany(()=> DM, (dms)=>dms._Workspace)
    _DMs: DM[];
}