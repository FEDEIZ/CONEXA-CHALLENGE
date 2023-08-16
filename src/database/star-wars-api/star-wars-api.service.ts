import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';
import { FilmsResponse } from './interfaces/films-response';
import { Film } from 'src/modules/film/entities/film.entity';

@Injectable()
export class StarWarsApiService {
    private apiUrl : string;
    constructor(private readonly configService : ConfigService,
        private readonly httpService: HttpService){
        this.apiUrl = this.configService.get('STARWARS_API');
    }

    async getFilms(){
        const r : FilmsResponse[] = [];
        await this.httpService.get(`${this.apiUrl}/films`).forEach(i => r.push(i.data));
        const films = r[0].results as Film[];

        return films;
    }


}
