import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("user-review")
export class UserReview {
    @PrimaryGeneratedColumn("increment")
    id:number

    @ManyToOne(()=>User)
    user:User;

    @ManyToOne(()=>Review, (review)=> review.user_review)
    review:Review;

}
