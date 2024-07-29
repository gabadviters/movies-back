import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movie')
export class Movie {

    @PrimaryGeneratedColumn('increment')
    id:Number;

    @Column('text')
    title:string

    @Column('text')
    image:string

    @Column('text')
    description:string

    @Column('text')
    category:string


    // @Column('text')
    // review:string


    @CreateDateColumn()
    crate_at: Date;
  
    @DeleteDateColumn()
    delete_at: Date;

}
