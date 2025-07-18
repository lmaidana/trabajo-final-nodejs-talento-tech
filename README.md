# Trabajo final nodeJS - Talento Tech

Trabajo final para el curso de NodeJS dictado por Talento Tech.

## Características

- API REST.
- Operaciones CRUD.
- Autorización y autenticación.
- Firestore.

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

## Licencia

Este proyecto está licenciado bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
