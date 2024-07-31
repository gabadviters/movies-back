import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('rol')
export class Role {

    @PrimaryGeneratedColumn('increment')
    id :number

    @ApiProperty()
    @Column('text')
    role: string;

    @CreateDateColumn()
    crate_at: Date;
  
    @DeleteDateColumn()
    delete_at: Date;

    @OneToMany(()=>User, (user)=>user.role)
    user:User
}


