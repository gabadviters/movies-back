import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMError } from 'typeorm';
import { Review } from './entities/review.entity';
import { UserReview } from 'src/user_review/entities/user_review.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Review, UserReview])],
  controllers: [ReviewsController],
  providers: [ReviewsService]
})
export class ReviewsModule {}
