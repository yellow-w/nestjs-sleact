import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('WORKSPACE')
@Controller('workspaces')
export class WorkspacesController {
    @Get()
    getMyWorkspaces(){

    }

    @Post()
    createMyWorkspaces(){}
    

    @Post(':url/members')
    getAllMembersFromWorkpsace(){

    }

    @Post(':url/members')
    inviteMembersToWorkspace(){

    }

    @Delete(':url/members/:id')
    kickMemeberFromWorkspace(){

    }

    @Get(':url/members/:id')
    getMemberInfoInWorkspace(){

    }
}
