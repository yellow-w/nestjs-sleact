import { Column, Entity } from 'typeorm';

@Entity({
    schema: 'sleact',
    name: 'channelchats'
})export class ChannelChats{
    @Column('varchar',{name: 'content'})
    content: string;

    @Column('varchar',{ name: 'UserId'})
    UserId: string;

    @Column('varchar',{name: 'ChannelId'})
    ChannelId: string;
}