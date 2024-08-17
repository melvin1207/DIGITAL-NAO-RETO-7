//si importan las librerias necesarias para el funcionamiento de la aplicación
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; //Se importa el modulo de App

//se crea una función bootstrap para inicializar la aplicación Nestjs
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/biblioteca'); //prefijo universal
  await app.listen(3000); //puerto de despliegue
}

//se ejecuta la función bootstrap, para la aplicación
bootstrap();
