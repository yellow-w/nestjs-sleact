import { Channel } from "src/channels/entities/channel.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity({
    schema: 'sleact',
    name: 'channelmembers'
})export class ChannelMember {
    @Column('varchar',{name:'ChannelId'})
    ChannelId: string;

    @Column('varchar',{ name: 'UserId'})
    UserId: string;

    @ManyToOne(()=>Channel, (channel)=>channel._ChannelMembers ,{
        onDelete: 'CASCADE',
        onUpdate:'CASCADE'
    })
    @JoinColumn([{
        name: 'ChannelId',
        referencedColumnName:'id'
    }])
    _Channel: Channel;

    @ManyToOne(()=>User, (user)=> user._ChannelMembers ,{
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    @JoinColumn([{
        name: 'UserId',
        referencedColumnName: 'id'
    }])
    _User: User;
}