import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Review) private readonly reviewRepository: Repository<Review>){}

  async create(createReviewDto: CreateReviewDto) {
    return await this.reviewRepository.save(createReviewDto);
  }

  async findAll() {
    return await this.reviewRepository.find({
      relations:{commnets:true}
    });
  }

  async findOne(id: number) {
    return await this.reviewRepository.findOne({
      where:{id:id},
      relations:{commnets:true}
    });
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    return await this.reviewRepository.update(id, updateReviewDto);
  }

  async remove(id: number) {
    return await this.reviewRepository.softDelete(id);
  }
}
