import { DateEntity } from "src/common/entities/date.entity";
import { Column, Entity } from "typeorm";

@Entity({
    schema: 'sleact',
    name: 'users'
})
export class User extends DateEntity{
    @Column()
    email: string;

    @Column()
    nickname: string;

    @Column()
    password: string;

}