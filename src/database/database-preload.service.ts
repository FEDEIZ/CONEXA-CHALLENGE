import { Injectable, OnModuleInit } from '@nestjs/common';
import { StarWarsApiService } from './star-wars-api/star-wars-api.service';
import { FilmService } from 'src/modules/film/film.service';
import { Film } from 'src/modules/film/entities/film.entity';

@Injectable()
export class DatabasePreloadService implements OnModuleInit {
  constructor(
    private readonly starWarsApiService: StarWarsApiService,
    private readonly filmService: FilmService
  ) {}

  async onModuleInit() {
    await this.preloadData();
  }

  private async preloadData() {
    const films = await this.starWarsApiService.getFilms();
    
    for(let i=0; i<films.length; i++){
        console.log(films[i]);
        const res = await this.filmService.create(films[i])
        console.log(res);
    }
    // Aquí puedes almacenar los datos en tu base de datos, si corresponde
    // Ejemplo: await this.userModel.create(films);
  }
}
