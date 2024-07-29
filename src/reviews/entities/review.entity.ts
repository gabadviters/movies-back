import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("review")
export class Review {
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column("text")
    review:string

    @Column("text")
    calification:string

    @CreateDateColumn()
    create_at: string

    @DeleteDateColumn()
    delete_at: string
}
