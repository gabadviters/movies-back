import { Comment } from "src/comments/entities/comment.entity";
import { Role } from "src/roles/entities/role.entity";
import { UserReview } from "src/user_review/entities/user_review.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";



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

    @DeleteDateColumn()
    deleted_at:string

    @OneToMany(()=> UserReview, (user_review)=> user_review.user)
    user_review:UserReview

    @Column({ default: 1 })
    roleId: number;

    @ManyToOne(()=> Role, (role)=>role.user)
    @JoinColumn({name: 'roleId'})
    role:Role

 
  

    @OneToMany(()=>Comment, (comments)=>comments.user)
    comments:Comment[]
}
