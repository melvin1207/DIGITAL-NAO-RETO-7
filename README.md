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
├───dist                    //Archivos compilados para la aplicación
├───images                  //Carpeta de imagenes para el README
├───src                     //Carpeta de la aplicación principal
│   ├───auth                //Archivos para la autenticación con JWT
│   │   ├───dto             //Modelos de los objetos
│   │   └───guard           //Archivos para resguardo de información
│   ├───favoritos           //Controladores, servicios, modulos, etc de Favoritos
│   ├───libros              //Controladores, servicios, modulos, etc de Libros
│   └───usuarios            //Controladores, servicios, modulos, etc de Usuarios
├───test                    //Carpeta para testeo
├───.env                    //Variables de entorno
├───.eslintrc.js            //regla para la escritura de Typescript
├───.gitignore              //archivos ignorados para subir en github
├───.prettierrc             //reglas para pretier
└───README                  //Archivo de documentación 
```

## 3. .ENV
Se recomienda crear un archivo .env con las siguientes variables:
```bash
MEGACORP_HOST = 
MEGACORP_PORT = 
MEGACORP_USER = 
MEGACORP_PASSWORD = 
MEGACORP_DATABASE = 
JWT_SECRET = 
```

## 4. DIAGRAMA ENTIDAD RELACION Y DICCIONARIO DE DATOS


## 5. AUTENTICACIÓN CON JWT
En el proyecto se utilizo el JWT como metodo de autenticación por lo cuál todos los endpoints estan protegidos, menos 2:

- Register: Sirve para la creación de nuevos usuarios, y se hace un HASH a la contraseña
** /api/biblioteca/auth/register ** 

- Login: Se crea un JTW para poder ingresar:
** /api/biblioteca/auth/login **
Al ejecutarla, la respuesta es la siguiente: 
```bash
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lbHZpbkBnbWFpbC5jb20iLCJpYXQiOjE3MjM5ODU1ODMsImV4cCI6MTcyNDA3MTk4M30.DO_1xYql8McHyBxaKABS7evmJgMGIJXTD30TAbo7g-Y",
  "email": "melvin@gmail.com"
}
```

El token que se presenta es el que se debe de ingresas en las autenticaciones de las aplicaciones que permiten probar APIS, para todos los demás endpoints, por ejemplo:
** /api/biblioteca/usuarios/{usuarioId} **
<img src="./images/Screenshot 2024-08-18 065600.png" alt="Incluir token en los endpoints" />




## 6. PARA LA DOCUMENTACIÓN DE LOS ENDPOINTS
Se tienen 2 opciones:

** La primer es entrar al link de la documentación en linea donde se puede realizar pruebas tambien**
https://digital-nao-reto-7.onrender.com/api/docs 

** La segunda al ejecutar el comando de pruebas **
```bash
$ npm run start:dev
```
Se puede ingresar al navegador y buscar la siguiente url:
http://localhost:3000/api/docs

