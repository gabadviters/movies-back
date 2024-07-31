import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateReviewDto {
    @ApiProperty()
    @IsString()
    review:string

    @ApiProperty()
    @IsString()
    calification:string


    @IsString()
    create_at:string

    @IsString()
    delete_at:string

}
