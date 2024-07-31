import { Genre } from "src/genres/entities/genre.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('movie')
export class Movie {

    @PrimaryGeneratedColumn('increment')
    id:Number;

   
    @Column('text')
    title:string

    @Column('text')
    image:string

    @Column('text')
    year:string

    @Column('text')
    description:string

    @Column('text')
    category:string


    @CreateDateColumn()
    crate_at: Date;
  
    @DeleteDateColumn()
    delete_at: Date;

    @OneToMany(()=> Review, (review)=>review.movie)
    review:Review[]

    @ManyToOne(()=> Genre, (genre)=>genre.movie)
    genre:Genre
}
