import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/common/utils/hashPassword.utils';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){}

  async emailExist(email:string){
    const user =  await this.userRepository.findOne({
      where:{email}
    })
    return user
 }

  async create(createUserDto: CreateUserDto) {
    
    if(await this.emailExist(createUserDto.email)){
      throw new BadRequestException("This email is already in use")
    }

    const password = await hashPassword(createUserDto.password);

    return await this.userRepository.save({ ...createUserDto, password });
  }

  async findAll() {
    return await this.userRepository.find({
      relations:{comments:true, user_review:true, role:true}
    }) ;
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where:{id:id},
      relations:{comments:true, user_review:true}
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

 async remove(id: number) {
    return await this.userRepository.softDelete(id);
  }
}
