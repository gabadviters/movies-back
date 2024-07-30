import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenresService {

  constructor(@InjectRepository(Genre) private readonly genreRepository: Repository<Genre>){}

  async create(createGenreDto: CreateGenreDto) {
    return await this.genreRepository.save(createGenreDto);
  }

  async findAll() {
    return await this.genreRepository.find();
  }

  async findOne(id: number) {
    return await this.genreRepository.findOne({
      where:{id:id}
    });
  }

  async update(id: number, updateGenreDto: UpdateGenreDto) {
    return await this.genreRepository.update(id,updateGenreDto);
  }

  async remove(id: number) {
    return await this.genreRepository.softDelete(id );
  }
}
