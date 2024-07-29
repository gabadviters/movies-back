import { IsString } from "class-validator"

export class CreateReviewDto {
    @IsString()
    review:string

    @IsString()
    calification:string

    @IsString()
    create_at:string

    @IsString()
    delete_at:string

}
