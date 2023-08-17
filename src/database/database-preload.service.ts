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
        const res = await this.filmService.create(films[i])
    }
    // Aquí puedes almacenar los datos en tu base de datos, si corresponde
    // Ejemplo: await this.userModel.create(films);
  }

  async resetFilmsDatabase() {
    console.log("Reseting db...");
    const filmsDb = await this.filmService.findAll();
    for(let i=0; i<filmsDb.length; i++){
      const res = await this.filmService.remove(filmsDb[i]._id)
    }
    if(!(await this.filmService.findAll()).length){
      this.preloadData();
    }
  }


}
