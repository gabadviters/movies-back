import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('rol')
export class Role {

    @PrimaryGeneratedColumn('increment')
    id :number

    @Column('text')
    role: string;

    @CreateDateColumn()
    crate_at: Date;
  
    @DeleteDateColumn()
    delete_at: Date;

}


