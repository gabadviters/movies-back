import { IsString } from "class-validator";

export class CreateRoleDto {

    @IsString()
    tipoUsuario:string

    create_at: Date;
    delete_at: Date;
}
