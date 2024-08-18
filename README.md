<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Correr la aplicación: Cuando se quieren hacer pruebas

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API DE BIBLIOTECA
Esta es una aplicación desarrollada con NEST.js para la creación de una API 

## 1. Instalación
Se debe ejecutar el comando en la carpeta principal del proyecto

```bash
$ npm install
```

## 2. Estrutura de carpetas
```bash
├───dist //Archivos compilados para la aplicación
├───src //Carpeta de la aplicación principal
│   ├───auth //Archivos para la autenticación con JWT
│   │   ├───dto  //Modelos de los objetos
│   │   └───guard //Archivos para resguardo de información
│   ├───favoritos //Controladores, servicios, modulos, etc de Favoritos
│   ├───libros //Controladores, servicios, modulos, etc de Libros
│   └───usuarios //Controladores, servicios, modulos, etc de Usuarios
├───test //Carpeta para testeo
├───.env //Variables de entorno
├───.eslintrc.js //regls para la escritura de Typescript
├───.gitignore //archivos ignorados para subir en github
├───.prettierrc //reglas para pretier
└───README //Archivo de documentación 
```

