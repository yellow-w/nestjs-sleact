import { HttpException, UseInterceptors } from '@nestjs/common';
import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { UserDto } from 'src/common/dto/user.dto';
import { UndefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptor';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';
import { UsersService } from 'src/users/users.service';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('USER')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){
    }

    @ApiOkResponse({
        type: UserDto,
        status: 200,
        description: '성공'
    })
    @ApiInternalServerErrorResponse({
        description: '서버 에러'
    })
    @ApiOperation({
        summary: '내 정보 조회'
    })
    @Get()
    getUsers(@User() user){
        return user;
    }

    @ApiOperation({ 
        summary: '회원가입' 
     }) 
    @Post()
    async join(@Body() body: JoinRequestDto){
        await this.usersService.join(body.email, body.nickname, body.password);
    }

    @Post('login')
    logIn(@User() user){
        return user;
    }

    @Post('logout')
    logOut(@Req() req, @Res() res){
        req.logOut();
        res.clearCookie('connect.sid', {httpOnly: true});
        res.send('ok');
    }
}
