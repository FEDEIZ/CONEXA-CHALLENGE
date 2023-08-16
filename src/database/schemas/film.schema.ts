import { Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import { Document, Model } from "mongoose";
import { Film } from "src/modules/film/entities/film.entity";

@Schema({collection: 'films'})
class FilmSchema implements Film {
    @Prop({required: true})
    title: string;
    
    @Prop({required: true})
    episode_id: string;
    
    @Prop({required: true})
    opening_crawl: string;
    
    @Prop({required: true})
    director: string;
    
    @Prop({required: true})
    producer: string;
    
    @Prop({required: true})
    release_date: Date;
    
    @Prop({required: true})
    species: string[];
    
    @Prop({required: true})
    starships: string[];
    
    @Prop({required: true})
    vehicles: string[];
    
    @Prop({required: true})
    characters: string[];
    
    @Prop({required: true})
    planets: string[];
    
}

export const FilmSchemaMongo = SchemaFactory.createForClass(FilmSchema);
export type FilmDocument = FilmSchema & Document;
export type FilmModel = Model<FilmSchema>