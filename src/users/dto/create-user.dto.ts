import { IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    user_name:string

    @IsString()
    email:string

    @IsString()
    password:string
}
