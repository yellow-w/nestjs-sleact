import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mentions } from 'src/mentions/mentions.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Mentions])],
    exports: [TypeOrmModule]
})
export class MentionsModule {}
