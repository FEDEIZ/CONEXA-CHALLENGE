import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseUUIDPipe, BadRequestException } from '@nestjs/common';
import { FilmService } from './film.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { AuthGuard } from '../auth/auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Roles as RolesEnum } from '../user/entities/user.entity';

@Controller('film')
@UseGuards(AuthGuard)
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Roles(RolesEnum.admin)
  @Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmService.create(createFilmDto);
  }

  @Get()
  findAll() {
    return this.filmService.findAll();
  }

  @Roles(RolesEnum.user)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmService.findOne(id);
  }

  @Roles(RolesEnum.admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmService.update(id, updateFilmDto);
  }

  @Roles(RolesEnum.admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmService.remove(id);
  }
}
