import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column("text")
    user_name:string

    @Column("text")
    email:string

    @Column("text")
    password:string
}
