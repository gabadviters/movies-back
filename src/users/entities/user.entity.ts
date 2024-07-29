import { Role } from "src/roles/entities/role.entity";
import { UserReview } from "src/user_review/entities/user_review.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";



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

    @OneToMany(()=> UserReview, (user_review)=> user_review.user)
    user_review:UserReview

    @ManyToOne(()=> Role, (role)=>role.user)
    role:Role
}
