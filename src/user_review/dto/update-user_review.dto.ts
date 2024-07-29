import { PartialType } from '@nestjs/mapped-types';
import { CreateUserReviewDto } from './create-user_review.dto';

export class UpdateUserReviewDto extends PartialType(CreateUserReviewDto) {}
