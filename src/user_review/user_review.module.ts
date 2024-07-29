import { Module } from '@nestjs/common';
import { UserReviewService } from './user_review.service';
import { UserReviewController } from './user_review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserReview } from './entities/user_review.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserReview])],
  controllers: [UserReviewController],
  providers: [UserReviewService]
})
export class UserReviewModule {}
