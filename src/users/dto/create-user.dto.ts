import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    user_name:string

    @ApiProperty()
    @IsString()
    email:string

    @ApiProperty()
    @IsString()
    password:string 
}
