import { Entity } from "typeorm";

@Entity()
export class User {
    id:number
    user_name:string
    email:string
    password:string
}
