import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {

  constructor(
    @InjectRepository(Login)
    private readonly loginRepository : Repository<Login>
  ){}

  create(createLoginDto: CreateLoginDto) {
// validar y token
    return this.loginRepository.save(createLoginDto)
  }

  
  // async createJWT(createLoginDto: CreateLoginDto) {
  //   createLoginDto.password = hashPassword(createLoginDto.password )

  //   let pass = createLoginDto.password


  // const user = await this.userRepository.findOne({where : 
  //   {email:createLoginDto.email, password :pass}
  // })
  
  // if (!user) throw new ForbiddenException('contraseña o mail invalido')

  // const payload = {email:user.email}
  // const token = this.jwtService.sign(payload, { expiresIn: 150 });
  
  //   return {
  //     token: token,
  //   };

  // }


  // async verifyToken(token: string) {
  //   try {
  //     await this.jwtService.verify(token);
  //     const decoded = await this.jwtService.decode(token);
  //     return decoded;
  //   } catch (error) {
  //     throw new UnauthorizedException(error);
  //   }
  // }
}
