import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { SearchQuery } from "src/utils/interfaces/ICRUD";
import { Film } from "src/modules/film/entities/film.entity";
import { FilmModel } from "../schemas/film.schema";
import { FilmRepository } from "src/modules/film/film.repository";

@Injectable()
export class MongoFilmRepository implements FilmRepository{
    
    constructor(@InjectModel(Film.name) private readonly filmModel: FilmModel){}
    
    async create(item: Partial<Film>): Promise<Film> {
        const film = await new this.filmModel(item).save();
        return film as Film;
    }
    async read(id: string): Promise<Film> {
        const result =  await this.filmModel.findById(id);
        if(!result) throw new NotFoundException;
        return result;
    }
    async update(id: string, item: Partial<Film>): Promise<boolean> {
        const result = await this.filmModel.updateOne({_id: id},item);
        if(!result.modifiedCount && !result.upsertedCount) throw new NotFoundException;
        return !!result.modifiedCount || !!result.upsertedCount;
    }
    async delete(id: string): Promise<boolean> {
        const result =  await this.filmModel.deleteOne({_id: id});
        if(!result.deletedCount) throw new NotFoundException;
        return !!result.deletedCount;
    }

    async deleteAll(): Promise<boolean> {
        const result = await this.filmModel.deleteMany();
        return !!result.deletedCount;
    }
    
    async search(query?: SearchQuery<Film>): Promise<Film[]> {
        return await this.filmModel.find(query).exec();
    }

    
    
}