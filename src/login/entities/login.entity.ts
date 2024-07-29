import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('login')
export class Login {

    @PrimaryGeneratedColumn('increment')
    id:Number;

    @Column('text')
    email:string

    @Column('text')
    password:String
}
