import { ChannelChat } from "src/channels/entities/channel-chat.entity";
import { ChannelMember } from "src/channels/entities/channel-member.entity";
import { User } from "src/users/entities/user.entity";
import { Workspace } from "src/workspaces/entities/workspace.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";

@Entity({
    schema: 'sleact',
    name: 'channels'
})export class Channel {
    @Column('varchar',{ 
        name: 'name',
        length: 30
    })
    name: string;

    @Column('boolean',{ name: 'private'})
    private: boolean | null;

    @Column('int',{ name: 'WorkspaceId'})
    WorkspaceId: number;

    @ManyToOne(()=> Workspace, (workspace)=>{workspace._Channels},{
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    })
    @JoinColumn([{
        name: 'WorkspaceId',
        referencedColumnName:'id'
    }])
    _Workspace: Workspace;


    @OneToMany(()=>ChannelChat, (channelChats)=> channelChats._Channel )
    _ChannelChats: ChannelChat[];

    @OneToMany(()=>ChannelMember, (channelmembers)=> channelmembers._Channel, {
        cascade: ['insert']
    } )
    _ChannelMembers: ChannelMember[];

    @ManyToMany(()=>User, (users)=> users._Channels)
    _Members: User[];
}