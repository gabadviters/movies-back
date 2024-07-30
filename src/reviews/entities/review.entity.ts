import { Comment } from "src/comments/entities/comment.entity";
import { Movie } from "src/movies/entities/movie.entity";
import { UserReview } from "src/user_review/entities/user_review.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("review")
export class Review {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column("text")
    review:string

    @Column("text")
    calification:string

    @Column("simple-array")
    comments:string[]

    @CreateDateColumn()
    create_at: string

    @DeleteDateColumn()
    delete_at: string

    @OneToMany(()=> UserReview, (user_review)=> user_review.review)
    user_review: UserReview

    @ManyToOne(()=> Movie, (movie)=>movie.review)
    movie: Movie

    @OneToMany(()=>Comment, (commnents)=>commnents.review)
    commnets:Comment[]
}
