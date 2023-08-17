import { Inject, Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { FILM_REPOSITORY, FilmRepository } from './film.repository';

@Injectable()
export class FilmService {
  private apiUrl: string; 

  constructor(@Inject(FILM_REPOSITORY) private readonly repository: FilmRepository) {}

  
  create(createFilmDto: CreateFilmDto) {
    return this.repository.create(createFilmDto)
    return 'This action adds a new film';
  }

  async findAll() {
    return await this.repository.search();
    
  }

  findOne(id: number) {
    return `This action returns a #${id} film`;
  }

  update(id: number, updateFilmDto: UpdateFilmDto) {
    return `This action updates a #${id} film`;
  }

  async remove(id: string) {
    return await this.repository.delete(id);
  }
}
