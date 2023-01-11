import { ApiProperty, PickType } from "@nestjs/swagger";
import { Users } from "@src/users/entities/user.entity";

export class JoinRequestDto extends PickType(Users, ['email', 'nickname', 'password' as const]){}