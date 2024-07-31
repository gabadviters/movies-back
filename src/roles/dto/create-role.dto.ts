import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {

    @ApiProperty()
    @IsString()
    tipoUsuario:string

    @IsString()
    create_at: Date;
    
    @IsString()
    delete_at: Date;
}
