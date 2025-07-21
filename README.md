# API REST de productos - Proyecto final Node.js (Talento Tech)

Trabajo final para el curso de NodeJS dictado por Talento Tech.

## Características

- Servidor web construido con Express.js
- Operaciones CRUD sobre productos
- Autenticación mediante JSON Web Tokens (JWT)
- Conexión con Firebase Firestore como base de datos
- Rutas protegidas y públicas
- Middleware personalizado para validación, error 404 y parsing de JSON

## Tecnologías utilizadas

- Node.js
- Express.js
- Firebase Firestore
- JSON Web Token (JWT)
- dotenv

## Consigna

La consigna consiste en crear una API REST para poder administrar productos mediante operaciones CRUD simples. La aplicación debe contar con una capa de autenticación para resguardar la seguridad de los datos, los cuales se alojan en el servicio de Firebase llamado Firestore. La aplicación debe contemplar diferentes escenarios donde el servidor puede arrojar codigos de estado 4xx y 5xx. Se debe contar con una configuración para el proyecto y utilizar JWT.

## Rutas

products.routes.js:

**GET /api/products** - devuelve todos los productos.

**GET /api/products/:id** - devuelve el producto con el ID indicado.

**POST /api/products/create** recibe en el cuerpo (body) de la petición la información sobre el nuevo producto para ser guardado en el servicio de datos en la nube.

**DELETE /api/products/:id** elimina el producto con el ID indicado.

auth.routes.js:

**POST /auth/login** recibe las credenciales de usuario en el cuerpo (body) de la petición y devuelve el Bearer token si son válidas o un error de autenticación en caso contrario.

## Limitaciones

Esta api permite crear o actualizar productos siempre y cuando tenga un json web token válido, y para la obtención del mismo se tiene un usuario default de prueba. Se valida al momento de crear o actualizar que el producto tenga únicamente nombre y precio, por el resto no se tuvo consideración alguna. Las rutas de obtención de listado de productos, borrado y obtención de producto por id son de caracter público y no se protegieron.

## Instalación

1. Clona el repositorio
2. Ejecutá `npm install`
3. Configurá el archivo `.env` con tus credenciales
4. Ejecutá el servidor con `npm start` o `node index.js`

## Licencia

Este proyecto está licenciado bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
