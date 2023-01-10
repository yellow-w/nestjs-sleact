import { Entity, DeleteDateColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity({
    schema: 'sleact',
    name: 'dates'
})
export class DateEntity{
    
    @CreateDateColumn({
        type: 'timestamp',
        name: 'createdAt',
        nullable: false,
        update: false
    })
    createdAt: Date 

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updatedAt',
        nullable: true,
    })
    updatedAt: Date | null;

    @DeleteDateColumn({
        type: 'timestamp',
        name: 'deletedAt',
        nullable: true,
    })
    deletedAt: Date | null;
}