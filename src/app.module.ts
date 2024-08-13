import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosService } from './libros/libros.service';
import { LibrosController } from './libros/libros.controller';

@Module({
  imports: [],
  controllers: [AppController, LibrosController],
  providers: [AppService, LibrosService],
})
export class AppModule {}
