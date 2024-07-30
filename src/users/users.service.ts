import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/common/utils/hashPassword.utils';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){}

  async create(createUserDto: CreateUserDto) {

    const password = await hashPassword(createUserDto.password);

    return await this.userRepository.save({ ...createUserDto, password });
  }

  async findAll() {
    return await this.userRepository.find({
      relations:{}
    }) ;
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where:{id:id}
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

 async remove(id: number) {
    return await this.userRepository.softDelete(id);
  }
}
