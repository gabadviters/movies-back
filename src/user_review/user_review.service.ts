import { Injectable } from '@nestjs/common';
import { CreateUserReviewDto } from './dto/create-user_review.dto';
import { UpdateUserReviewDto } from './dto/update-user_review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserReview } from './entities/user_review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserReviewService {

  constructor(@InjectRepository(UserReview) private readonly userReviewRepository: Repository<UserReview>){}

  async create(createUserReviewDto: CreateUserReviewDto) {
    return await this.userReviewRepository.save(createUserReviewDto);
  }

  async findAll() {
    return await this.userReviewRepository.find({
      relations:{user:true,review:true}
    });
  }

  async findOne(id: number) {
    return await this.userReviewRepository.findOne({
      where:{id:id},
      relations: {review:true}
    });
  }

  async update(id: number, updateUserReviewDto: UpdateUserReviewDto) {
    return await this.userReviewRepository.update(id,updateUserReviewDto);
  }

  async remove(id: number) {
    return await this.userReviewRepository.softDelete(id);
  }
}
