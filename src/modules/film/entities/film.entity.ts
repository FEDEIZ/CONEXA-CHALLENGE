import { IEntity } from "src/utils/interfaces/IEntity";

export class Film implements IEntity{
    _id: string;
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    species: string[];
    starships: string[];
    vehicles: string[];
    characters: string[];
    planets: string[]
    createdAt: Date;
}
