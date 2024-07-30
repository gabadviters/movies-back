import { Movie } from "src/movies/entities/movie.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("genre")
export class Genre {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column("text")
    genre:string

    @OneToMany(()=>Movie, (movie)=> movie.genre)
    movie:Movie
}
