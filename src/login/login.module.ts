import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: 'tu-secreto',
  }),],
  controllers: [LoginController],
  providers: [LoginService],
  exports:[LoginService]
})
export class LoginModule {}
