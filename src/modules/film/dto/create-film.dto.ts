import { PartialType } from "@nestjs/mapped-types";
import { Film } from "../entities/film.entity";
import { ArrayContains, ArrayNotEmpty, ArrayUnique, IsArray, IsDateString, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class CreateFilmDto extends PartialType(Film) {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    episode_id: string;

    @IsString()
    @IsNotEmpty()
    opening_crawl: string;

    @IsString()
    @IsNotEmpty()
    director: string;

    @IsString()
    @IsNotEmpty()
    producer: string;

    @IsDateString()
    @IsNotEmpty()
    release_date: Date;

    @IsOptional()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsString({ each: true })
    species: string[];

    @IsOptional()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsString({ each: true })
    starships: string[];

    @IsOptional()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsString({ each: true })
    vehicles: string[];

    @IsOptional()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsString({ each: true })
    characters: string[];

    @IsOptional()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsString({ each: true })
    planets: string[];

}
