import { Entity, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'commons'
})
export class CommonEntity{
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    id: number;

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