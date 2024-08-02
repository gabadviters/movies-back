import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { UserReview } from 'src/user_review/entities/user_review.entity';

@Injectable()
export class ReviewsService {
  constructor(@InjectRepository(Review) private readonly reviewRepository: Repository<Review>,
  @InjectRepository(UserReview) private readonly user_reviewRepository: Repository<UserReview>
){}

  async create(createReviewDto: CreateReviewDto) {
    const {movieId,...Dto} = createReviewDto
    const userId = createReviewDto.user
   
    const review = await this.reviewRepository.save({...Dto, movieId:movieId});
    console.log(movieId)
     
    return  await this.user_reviewRepository.save({user: userId, review,})
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
    return await this.reviewRepository.update(id, updateReviewDto as any);
  }

  async remove(id: number) {
    return await this.reviewRepository.softDelete(id);
  }
}
