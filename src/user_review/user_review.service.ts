import { Injectable } from '@nestjs/common';
import { CreateUserReviewDto } from './dto/create-user_review.dto';
import { UpdateUserReviewDto } from './dto/update-user_review.dto';

@Injectable()
export class UserReviewService {
  create(createUserReviewDto: CreateUserReviewDto) {
    return 'This action adds a new userReview';
  }

  findAll() {
    return `This action returns all userReview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userReview`;
  }

  update(id: number, updateUserReviewDto: UpdateUserReviewDto) {
    return `This action updates a #${id} userReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} userReview`;
  }
}
