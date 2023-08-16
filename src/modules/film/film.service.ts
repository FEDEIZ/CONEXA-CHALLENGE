import { Inject, Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { ConfigService } from '@nestjs/config';
import { StarWarsApiService } from 'src/database/star-wars-api/star-wars-api.service';
import { FILM_REPOSITORY, FilmRepository } from './film.repository';

@Injectable()
export class FilmService {
  private apiUrl: string; 

  constructor(private readonly starWarsApiService: StarWarsApiService,
    @Inject(FILM_REPOSITORY) private readonly repository: FilmRepository) {}

  
  create(createFilmDto: CreateFilmDto) {
    return this.repository.create(createFilmDto)
    return 'This action adds a new film';
  }

  async findAll() {
    return await this.starWarsApiService.getFilms();
    
  }

  findOne(id: number) {
    return `This action returns a #${id} film`;
  }

  update(id: number, updateFilmDto: UpdateFilmDto) {
    return `This action updates a #${id} film`;
  }

  remove(id: number) {
    return `This action removes a #${id} film`;
  }
}
