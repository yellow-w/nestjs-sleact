import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkspaceMembers } from 'src/workspaces/entities/workspace-member.entity';
import { Workspaces } from 'src/workspaces/entities/workspace.entity';
import { WorkspacesController } from './workspaces.controller';
import { WorkspacesService } from './workspaces.service';

@Module({
  imports: [TypeOrmModule.forFeature([Workspaces, WorkspaceMembers])],
  controllers: [WorkspacesController],
  providers: [WorkspacesService],
  exports: [TypeOrmModule]
})
export class WorkspacesModule {}
