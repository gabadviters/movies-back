import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt"

@Injectable()
export class LoginService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository : Repository<User>,
    private readonly jwtService: JwtService
  ){}

  async createJWT(createLoginDto: CreateLoginDto) {

    try {
      const user = await this.userRepository.findOne({where :
        {email:createLoginDto.email}
      })
      console.log(user);
      
  
      if (!user) throw new ForbiddenException('Wrong email')
        
      const isValid = await bcrypt.compare(createLoginDto.password,user.password)
      console.log("comparacionpassword", isValid);
      
   
     if(!isValid) throw new BadRequestException("Wrong password!")
  
    const payload = {email:user.email}
    const token = this.jwtService.sign(payload, { expiresIn: 150 });
    console.log(token);
    
      return {
        token: token,
        id: user.id,
        userName: user.user_name,
        role: user.role,
        email: user.email
      };
    } catch (error) {
      throw new UnauthorizedException(error)
      
    }
 
  }


  async verifyToken(token: string) {
    try {
      await this.jwtService.verify(token);
       
      const decoded = await this.jwtService.decode(token);
      
      if (!decoded) {
        throw new UnauthorizedException('Token decoding failed');
      }

     return decoded;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
 
}
