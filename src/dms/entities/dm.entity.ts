import { User } from "src/users/entities/user.entity";
import { Workspace } from "src/workspaces/entities/workspace.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity({
    schema: 'sleact',
    name: 'dms'
})export class DM {
    @Column('varchar',{ name: 'content'})
    content: string;

    @Column('varchar', {name: 'WorkspaceId'})
    WorkspaceId: string;

    @Column('varchar',{ name: 'SenderId'})
    SenderId: string;

    @Column('varchar',{ name: 'ReceiverId'})
    ReceiverId: string;

    @ManyToOne(()=> Workspace, (workspace)=> workspace._DMs,{
        onDelete:'SET NULL',
        onUpdate: 'CASCADE'
    })
    @JoinColumn({
        name: 'WorkspaceId',
        referencedColumnName:'id'
    })
    _Workspace: Workspace;

    @ManyToOne(()=>User, (users)=> users._DMs_sender,{
        onDelete:'SET NULL',
        onUpdate:'CASCADE'
    })
    @JoinColumn([{
        name: 'SenderId',
        referencedColumnName: 'id'
    }])
    _Sender: User;

    @ManyToOne(()=>User, (users)=>users._DMs_receiver,{
        onDelete:'SET NULL',
        onUpdate: 'CASCADE'
    })
    @JoinColumn({
        name: 'ReceiverId',
        referencedColumnName: 'id'
    })
    _Receiver: User;
}