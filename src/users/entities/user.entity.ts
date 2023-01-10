import { ChannelChat } from "src/channels/entities/channel-chat.entity";
import { ChannelMember } from "src/channels/entities/channel-member.entity";
import { Channel } from "src/channels/entities/channel.entity";
import { DateEntity } from "src/common/entities/date.entity";
import { DM } from "src/dms/entities/dm.entity";
import { WorkspaceMember } from "src/workspaces/entities/workspace-member.entity";
import { Workspace } from "src/workspaces/entities/workspace.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany } from "typeorm";

@Entity({
    schema: 'sleact',
    name: 'users'
})
export class User extends DateEntity{
    @Column()
    email: string;

    @Column()
    nickname: string;

    @Column()
    password: string;

    @OneToMany(()=>Workspace, (workspaces)=> workspaces._Owner)
    _OwnedWorkspaces: Workspace[];

    @ManyToMany(()=>Workspace, (workspaces)=> workspaces._Members)
    @JoinTable({
        name: 'workspacemembers',
        joinColumn: {
            name:'UserId',
            referencedColumnName:'id'
        },
        inverseJoinColumn: {
            name: 'WorkspaceId',
            referencedColumnName:'id'
        }
    })
    _Workspaces: Workspace[];

    @OneToMany(()=>DM, (dms)=>dms._Sender)
    _DMs_sender: DM[];

    @OneToMany(()=>DM, (dms)=>dms._Receiver)
    _DMs_receiver: DM[];

    @OneToMany(()=>WorkspaceMember, (workspacemembers)=> workspacemembers._User)
    _WorkspaceMembers: WorkspaceMember[];

    @OneToMany(()=> ChannelChat, (channelchats)=> channelchats._User )
    _ChannelChats: ChannelChat[];

    @OneToMany(()=>ChannelMember, (channelmembers)=>channelmembers._User)
    _ChannelMembers: ChannelMember[];

    @ManyToMany(()=> Channel, (channels)=>channels._Members)
    @JoinTable({
        name: 'channelmembers',
        joinColumn: {
            name: 'UserId',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'ChannelId',
            referencedColumnName:'id'
        }
    })
    _Channels: Channel[];
}