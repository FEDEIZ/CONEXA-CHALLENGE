import { Injectable, OnModuleInit } from '@nestjs/common';
import { StarWarsApiService } from './star-wars-api/star-wars-api.service';
import { FilmService } from 'src/modules/film/film.service';
import { Film } from 'src/modules/film/entities/film.entity';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(
    private readonly starWarsApiService: StarWarsApiService,
    private readonly filmService: FilmService
  ) {}

  async onModuleInit() {
    const filmsDb = await this.filmService.findAll();
    if(!filmsDb.length)
      await this.preloadData();
  }

   async preloadData() {
    console.log("preloading data...")
    const films = await this.starWarsApiService.getFilms();
    
    for(let i=0; i<films.length; i++){
        await this.filmService.create(films[i])
    }

  }

  async resetFilmsDatabase() {
    console.log("Reseting db...");
    this.filmService.deleteAll();
    if(!(await this.filmService.findAll()).length){
      await this.preloadData();
    }
    return "Films database succsesfully reseted"
  }


}
