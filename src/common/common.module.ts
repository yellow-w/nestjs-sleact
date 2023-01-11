import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonEntity } from '@src/common/entities/common.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CommonEntity])],
    exports: [TypeOrmModule]
})
export class CommonModule {}
