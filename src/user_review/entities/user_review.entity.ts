import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user-review")
export class UserReview {
    @PrimaryGeneratedColumn("increment")
    id:number

}
