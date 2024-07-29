import { Module } from '@nestjs/common';
import { UserReviewService } from './user_review.service';
import { UserReviewController } from './user_review.controller';

@Module({
  controllers: [UserReviewController],
  providers: [UserReviewService]
})
export class UserReviewModule {}
