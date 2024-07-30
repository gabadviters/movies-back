import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {

  constructor(@InjectRepository(Comment) private readonly commnetRepository: Repository<Comment>){}

  async create(createCommentDto: CreateCommentDto) {
    return await this.commnetRepository.save(createCommentDto);
  }

  async findAll() {
    return await this.commnetRepository.find();
  }

  async findOne(id: number) {
    return await this.commnetRepository.findOne({
      where: {id:id}
    });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return await this.commnetRepository.update(id, updateCommentDto);
  }

  async remove(id: number) {
    return await this.commnetRepository.softDelete(id);
  }
}
