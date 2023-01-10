import { Column, Entity } from "typeorm";

@Entity({
    schema: 'sleact',
    name: 'dms'
})export class Dm {
    @Column('varchar',{ name: 'content'})
    content: string;

    @Column('varchar', {name: 'WorkspaceId'})
    WorkspaceId: string;

    @Column('varchar',{ name: 'SenderId'})
    SenderId: string;

    @Column('varchar',{ name: 'ReceiverId'})
    ReceiverId: string;
}