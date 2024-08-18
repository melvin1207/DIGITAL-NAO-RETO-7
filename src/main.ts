//si importan las librerias necesarias para el funcionamiento de la aplicación
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; //Se importa el modulo de App
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; //Modulos de Swagger

//se crea una función bootstrap para inicializar la aplicación Nestjs
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/biblioteca'); //prefijo universal

  //Titulos de la documentación
  const options = new DocumentBuilder()
    .setTitle('Biblioteca API')
    .setDescription('API de la biblioteca')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
      'access-token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);

  //ruta para la documentación
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000); //puerto de despliegue
}

//se ejecuta la función bootstrap, para la aplicación
bootstrap();
