import { Film } from "src/modules/film/entities/film.entity";

export interface FilmsResponse{
    count: number,
    next?: string,
    previus?: string,
    results: Film[]

}