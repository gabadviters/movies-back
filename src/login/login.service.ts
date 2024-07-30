import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { hashPassword } from 'src/common/utils/hashPassword.utils';
import * as bcrypt from "bcrypt"

@Injectable()
export class LoginService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository : Repository<User>,
    private readonly jwtService: JwtService
  ){}

  async createJWT(createLoginDto: CreateLoginDto) {

    const user = await this.userRepository.findOne({where :
      {email:createLoginDto.email}
    })

    if (!user) throw new ForbiddenException('Wrong email')
      
    const isValid = bcrypt.compare(createLoginDto.password,user.password)
 
   if(!isValid) throw new BadRequestException("Wrong password!")

 
  const payload = {email:user.email}
  const token = this.jwtService.sign(payload, { expiresIn: 150 });
  console.log(token);
  
    return {
      token: token,
    };
 
  }


  async verifyToken(token: string) {
    try {
       await this.jwtService.verify(token);
      const decoded = await this.jwtService.decode(token);
      // const user:User = await this.userRepository.findOne(decoded.id)
      // const same = await verifyPassword(user.password, decoded.password)

    

     return decoded;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
 
}
