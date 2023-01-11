import { MigrationInterface, QueryRunner } from "typeorm"

export class migrations1673426046412 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        'ALTER TABLE `mentions` RENAME COLUMN `category` TO `type`'
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        'ALTER TABLE `mentions` RENAME COLUMN `type` TO `category`'
    }

}
