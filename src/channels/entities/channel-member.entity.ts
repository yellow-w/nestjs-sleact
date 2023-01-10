import { Column, Entity } from "typeorm";

@Entity({
    schema: 'sleact',
    name: 'channelmembers'
})export class ChannelMember {
    @Column('varchar',{name:'ChannelId'})
    ChannelId: string;

    @Column('varchar',{ name: 'UserId'})
    UserId: string;
}