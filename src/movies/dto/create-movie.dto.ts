import { IsString } from "class-validator";

export class CreateMovieDto {
    @IsString()
    title: string

    @IsString()
    image: string

    @IsString()
    description: string

    @IsString()
    category: string

    create_at: Date;
    delete_at: Date;
}
