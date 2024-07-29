import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { MoviesModule } from './movies/movies.module';
import { RolesModule } from './roles/roles.module';
import { UserReviewModule } from './user_review/user_review.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UsersModule, ReviewsModule, MoviesModule, RolesModule, UserReviewModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'movies',
      entities: ['dist/**/*.entity.{ts,js}'],
      synchronize: true,
    }), LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
