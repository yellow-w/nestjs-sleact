import { DateEntity } from "src/common/entities/date.entity";
import { User } from "src/users/entities/user.entity";
import { Workspace } from "src/workspaces/entities/workspace.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity({
    schema: 'sleact',
    name: 'workspacemembers'
})export class WorkspaceMember extends DateEntity{
    @Column('int',{name: 'WorkspaceId'})
    WorkspaceId: number;

    @Column('int',{name: 'UserId'})
    UserId: number;

    @Column('timestamp',{name: 'loggedInAt'})
    loggedInAt: Date | null;

    @ManyToOne(()=>Workspace, (workspaces)=> workspaces._WorkspaceMembers,{
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    @JoinColumn([{
        name: 'WorkspaceId',
        referencedColumnName: 'id'
    }])
    _Workspace: Workspace;

    @ManyToOne(()=>User, (users)=> users._WorkspaceMembers ,{
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    @JoinColumn({
        name: '_userid',
        referencedColumnName: 'id'
    })
    _User: User;
}