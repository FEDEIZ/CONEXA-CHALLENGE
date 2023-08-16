import { ICRUD } from 'src/utils/interfaces/ICRUD';
import { Film } from './entities/film.entity';

export const FILM_REPOSITORY = 'FilmRepository';

export interface FilmRepository extends ICRUD<Film> {}