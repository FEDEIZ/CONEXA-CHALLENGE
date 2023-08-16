import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [FilmController],
  providers: [FilmService],
  exports: [FilmService]
})
export class FilmModule {}
