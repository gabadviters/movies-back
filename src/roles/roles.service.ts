import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>
  ){}

  create(createRoleDto: CreateRoleDto) {
    return this.roleRepository.save(createRoleDto)

  }

  findAll() {
    return this.roleRepository.find()
  }

  findOne(id: number) {
    return this.roleRepository.findOne({where: {id:id}})
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleRepository.update({id:id},updateRoleDto)
  }

  remove(id: number) {
    return this.roleRepository.softDelete({id:id})
  
  }


}
