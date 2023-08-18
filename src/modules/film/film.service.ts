import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { FILM_REPOSITORY, FilmRepository } from './film.repository';

@Injectable()
export class FilmService {
  private apiUrl: string; 

  constructor(@Inject(FILM_REPOSITORY) private readonly repository: FilmRepository) {}

  
  create(createFilmDto: CreateFilmDto) {
    return this.repository.create(createFilmDto)
    .catch(e => {throw new HttpException("Could not create the film: " + e.message, HttpStatus.CONFLICT)})
  }

  findAll() {
    return this.repository.search()
    .catch(e => {throw new HttpException("Could not find the films: " + e.message, HttpStatus.CONFLICT)})
  }

  findOne(id: string) {
    return this.repository.read(id)
    .catch(e => {throw new HttpException("Could not read the film: " + e.message, HttpStatus.CONFLICT)})
  }

  update(id: string, updateFilmDto: UpdateFilmDto) {
    return this.repository.update(id, updateFilmDto)
    .catch(e => {throw new HttpException("Could not update the film: " + e.message, HttpStatus.CONFLICT)})
  }

  remove(id: string) {
    return this.repository.delete(id)
    .catch(e => {throw new HttpException("Could not delete the film: " + e.message , HttpStatus.CONFLICT)})
  }

  deleteAll(){
    return this.repository.deleteAll()
    .catch(e => {throw new HttpException("Could not delete all the films: " + e.message , HttpStatus.CONFLICT)})
  }
}
