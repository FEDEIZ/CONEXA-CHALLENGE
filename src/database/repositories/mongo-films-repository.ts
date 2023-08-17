import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { SearchQuery } from "src/utils/interfaces/ICRUD";
import { Film } from "src/modules/film/entities/film.entity";
import { FilmModel } from "../schemas/film.schema";
import { FilmRepository } from "src/modules/film/film.repository";

@Injectable()
export class MongoFilmRepository implements FilmRepository{
    
    constructor(@InjectModel(Film.name) private readonly filmModel: FilmModel){}
    
    async create(item: Film): Promise<Film> {
        const film = await new this.filmModel(item).save();
        return film as Film;
    }
    read(id: string): Promise<Film> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: Film): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<boolean> {
        return await this.filmModel.findOneAndDelete({_id: id});
    }
    
    async search(query?: SearchQuery<Film>): Promise<Film[]> {
        return await this.filmModel.find(query).exec();
    }

    
    
}