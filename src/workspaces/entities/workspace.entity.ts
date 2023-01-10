import { DateEntity } from "src/common/entities/date.entity";
import { Column, Entity } from "typeorm";

@Entity({
    schema: 'sleact',
    name: 'workspaces'
})
export class Workspace extends DateEntity {
    @Column(
        'varchar',
        {
            name: 'name',
        }
    )
    name: string

    @Column(
        'varchar',
        {
            name: 'url'
        }
    )
    url: string

    @Column(
        'varchar',
        {
            name: 'OwnerId'
        }
    )
    OwnerId: string
}