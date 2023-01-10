import { Channel } from 'src/channels/entities/channel.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({
    schema: 'sleact',
    name: 'channelchats'
})export class ChannelChat{
    @Column('text',{name: 'content'})
    content: string;

    @Column('int',{ name: 'UserId'})
    UserId: number;

    @Column('int',{name: 'ChannelId'})
    ChannelId: number;

    @ManyToOne(()=>Channel, (channel)=> channel._ChannelChats ,{
        onDelete:'SET NULL',
        onUpdate:'CASCADE'
    })
    @JoinColumn([{
        name: 'ChannelId',
        referencedColumnName: 'id'
    }])
    _Channel: Channel; 

    @ManyToOne(()=>User, (user)=> user._ChannelChats ,{
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
    })
    @JoinColumn([{
        name: 'UserId',
        referencedColumnName: 'id'
    }])
    _User: User;
}