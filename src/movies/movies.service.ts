import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {

  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>
  ){}

  create(createMovieDto: CreateMovieDto) {
    return this.movieRepository.save(createMovieDto);
  }

  findAll() {
   return this.movieRepository.find()
  }

  findOne(id: number) {
   return this.movieRepository.findOne({where:{id:id}})
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
   return this.movieRepository.update({id:id},updateMovieDto)

  }

  remove(id: number) {
    return this.movieRepository.softDelete({id:id})
  }
}
