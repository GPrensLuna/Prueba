# PAQUETES INSTALADOS

### Paquetes iniciales

- **npm -> cambia según el que estés usando ("pnpm" )**

---

- npm install -D nodemon
- npm install express cors ts-node
- npm install -D @types/express @types/cors @types/node
- npm i cookie-parser @types/cookie-parser morgan @types/morgan

### Paquetes DB

- npm install prisma @prisma/client

para inicializar prisma

`npx prisma init`

este comando te generara una carpeta prisma con un archivo schema.prisma dentro de este archivo estaremos escribiendo los modelos de las tablas de la base de datos que seleccionaron en nuestro caso PostgresSQL.

también creara un archivo .env en el cual se colocan las variables globales de código

**Recuerda que tienes que configura en package.json**

- **npm -> cambia según el que estés usando ("pnpm" )**

---

`"mig": "npm prisma migrate",`
`"gen": "npm prisma generate",`

### Docs

`npm install swagger-ui-express swagger-jsdoc`
