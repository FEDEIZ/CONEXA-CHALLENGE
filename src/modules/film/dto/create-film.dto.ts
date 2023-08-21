import { PartialType } from "@nestjs/mapped-types";
import { Film } from "../entities/film.entity";
import { ArrayContains, ArrayNotEmpty, ArrayUnique, IsArray, IsDateString, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";


export class CreateFilmDto extends PartialType(Film) {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    episode_id: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    opening_crawl: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    director: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    producer: string;

    @ApiProperty()
    @IsDateString()
    @IsNotEmpty()
    release_date: Date;

    @ApiProperty({nullable:true})
    @IsOptional()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsString({ each: true })
    species: string[];

    @ApiProperty({nullable:true})
    @IsOptional()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsString({ each: true })
    starships: string[];

    @ApiProperty({nullable:true})
    @IsOptional()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsString({ each: true })
    vehicles: string[];

    @ApiProperty({nullable:true})
    @IsOptional()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsString({ each: true })
    characters: string[];

    @ApiProperty({nullable:true})
    @IsOptional()
    @ArrayNotEmpty()
    @ArrayUnique()
    @IsString({ each: true })
    planets: string[];

}
