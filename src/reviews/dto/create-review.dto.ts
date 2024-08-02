import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"
import { User } from "src/users/entities/user.entity"
import { Review } from "../entities/review.entity"
import { Movie } from "src/movies/entities/movie.entity"

export class CreateReviewDto {
    @ApiProperty()
    @IsString()
    review:string

    @IsNumber()
    user:User

    @IsNumber()
    movieId:number

    @ApiProperty()
    @IsString()
    calification:string



}
