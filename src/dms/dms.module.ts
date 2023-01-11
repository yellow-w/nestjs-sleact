import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DMs} from 'src/dms/entities/dm.entity';
import { DmsController } from './dms.controller';
import { DmsService } from './dms.service';

@Module({
  imports: [TypeOrmModule.forFeature([DMs])],
  controllers: [DmsController],
  providers: [DmsService],
  exports: [TypeOrmModule]
})
export class DmsModule {}