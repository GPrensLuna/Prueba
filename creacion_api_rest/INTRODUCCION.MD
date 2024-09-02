# Documentación del Proyecto `create_api_rest`

## Descripción del Proyecto

`create_api_rest` es una aplicación en TypeScript para crear una API REST con autenticación. Utiliza diversas herramientas y librerías para facilitar el desarrollo, pruebas y documentación de la API.

## Estructura del Proyecto

- **main.ts**: Archivo principal de entrada de la aplicación.
- **package.json**: Archivo de configuración del proyecto.
- **prisma**: Carpeta que contiene los archivos de configuración de Prisma.
- **.env**: Archivo para variables de entorno.

## Instalación de Paquetes

### Paquetes Iniciales

Estos paquetes son necesarios para el desarrollo básico de la aplicación:

1. **Nodemon**: Herramienta para reiniciar automáticamente el servidor al realizar cambios en el código.
   ```sh
   npm install -D nodemon

2. **Cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
   ```sh
   npm install cors

3. **Ts-node**: Herramienta para ejecutar archivos TypeScript directamente.
   ```sh
   npm install -D ts-node

4. **Tipos de TypeScript**: Definiciones de tipos para TypeScript.
   ```sh
   npm install -D @types/express @types/cors @types/node

5. **Cookie-parser**: Middleware para analizar cookies en solicitudes.
   ```sh
    npm install cookie-parser

6. **@types/cookie-parser**: Definiciones de tipos para cookie-parser.
   ```sh
    npm install -D @types/cookie-parser

7. **Morgan**: Middleware para registrar solicitudes HTTP.
   ```sh
    npm install morgan

8. **@types/morgan**: Definiciones de tipos para morgan.
   ```sh
    npm install -D @types/morgan

## Paquetes para la Base de Datos

### Prisma

[Prisma](https://www.prisma.io/) es un ORM (Object-Relational Mapper) para trabajar con bases de datos.

1. **Instalación:**
   ```sh
   npm install prisma @prisma/client

2. **Inicialización de Prisma**: Ejecuta el siguiente comando para generar los archivos de configuración de Prisma:
   ```sh
   npx prisma init

Esto creará una carpeta llamada prisma con un archivo schema.prisma donde definirás tus modelos de base de datos. También se creará un archivo .env para las variables de entorno.

3. **Configuración de Scripts en package.json**: Agrega los siguientes scripts para gestionar las migraciones y la generación de Prisma:

   ```sh
   "scripts": {
     "mig": "prisma migrate",
     "gen": "prisma generate"
    }

# Paquetes para Pruebas y Documentación

## Vitest

Vitest es un framework de pruebas para TypeScript y JavaScript.

### Instalación

    npm install -D vitest

# Supertest

Supertest es una utilidad para probar las solicitudes HTTP.

## Instalación

    npm install -D supertest

# Swagger

Swagger proporciona herramientas para documentar la API.

## Instalación

    npm install swagger-jsdoc swagger-ui-express

# Configuración de ESLint

Para el análisis de código y estilo, tu proyecto utiliza ESLint configurado con el estilo Standard. Asegúrate de tener el archivo de configuración en eslintConfig dentro de package.json:

## Instalación
```sh
    "eslintConfig": {
     "extends": "./node_modules/standard/eslintrc.json"}

