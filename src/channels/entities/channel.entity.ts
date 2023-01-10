import { Column, Entity } from "typeorm";

@Entity({
    schema: 'sleact',
    name: 'channels'
})export class Channel {
    @Column('varchar',{ name: 'name'})
    name: string;

    @Column('boolean',{ name: 'private'})
    private: boolean | null;

    @Column('varchar',{ name: 'WorkspaceId'})
    WorkspaceId: string;
}