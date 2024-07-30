import { IsString } from "class-validator";

export class CreateMovieDto {
    @IsString()
    title: string

    @IsString()
    image: string

    @IsString()
    year: string

    @IsString()
    description: string

    @IsString()
    category: string

    @IsString()
    create_at: Date;

    @IsString()
    delete_at: Date;
}
