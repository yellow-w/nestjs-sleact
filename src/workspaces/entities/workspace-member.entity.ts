import { DateEntity } from "src/common/entities/date.entity";
import { Column, Entity } from "typeorm";

@Entity({
    schema: 'sleact',
    name: 'workspacemembers'
})export class WorkspaceMember extends DateEntity{
    @Column('varchar',{name: 'WorkspaceId'})
    WorkspaceId: string;

    @Column('varchar',{name: 'UserId'})
    UserId: string;

    @Column('timestamp',{name: 'loggedInAt'})
    loggedInAt: Date | null;
}