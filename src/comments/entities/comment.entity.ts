import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("comment")
export class Comment {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column("text")
    comment:string

    @ManyToOne(()=> User, (user)=> user.comments)
    user:User;

    @ManyToOne(()=>Review, (review)=> review.commnets)
    review:Review
}
