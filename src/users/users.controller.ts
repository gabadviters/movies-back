import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthJWTGuard } from 'src/guards/jwtGuard.guard';
import { UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';


@ApiTags("users")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('restore-deleted/:id')
  async restoreDeletedUsers(@Param('id') id: number): Promise<UpdateResult> {
    return await this.usersService.restoreDeletedUsers(+id);
  }

  @UseGuards(AuthJWTGuard)
  @Get()
  findAll(@Req()req ) {
    console.log(req.user);
    
    return this.usersService.findAll();
  }

  @Get("find_deleted")
  async obtainUsersSoftDeleted() {
    return await this.usersService.obtainUsersSoftDeleted();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @UseGuards(AuthJWTGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Req() req) {
    console.log(req.user);
    
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

}
