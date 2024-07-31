import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateMovieDto {
    @ApiProperty()
    @IsString()
    title: string

    @ApiProperty()
    @IsString()
    image: string

    @ApiProperty()
    @IsString()
    year: string

    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsString()
    category: string

    @IsString()
    create_at: Date;

    @IsString()
    delete_at: Date;
}
