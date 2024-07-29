import { IsString } from "class-validator";

export class CreateRoleDto {

    @IsString()
    tipoUsuario:string

    @IsString()
    create_at: Date;
    
    @IsString()
    delete_at: Date;
}
