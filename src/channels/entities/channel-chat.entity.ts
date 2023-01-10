import { Channel } from 'src/channels/entities/channel.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({
    schema: 'sleact',
    name: 'channelchats'
})export class ChannelChat{
    @Column('varchar',{name: 'content'})
    content: string;

    @Column('varchar',{ name: 'UserId'})
    UserId: string;

    @Column('varchar',{name: 'ChannelId'})
    ChannelId: string;

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