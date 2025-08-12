
# ToDo List Backend

Este proyecto es una API REST para la gestión de tareas (ToDo List), desarrollada con Node.js y Express, utilizando MongoDB como base de datos.

## Características principales
- CRUD de tareas (crear, leer, actualizar, eliminar)
- Validaciones y manejo de errores
- Rate limiting para protección
- Documentación con Swagger

## Requisitos previos
- Node.js (v14 o superior)
- MongoDB (local o Atlas)

## Instalación y ejecución local
1. Clona el repositorio:
	```powershell
	git clone https://github.com/FGarcia012/ToDo_List_Back.git
	```
2. Instala las dependencias:
	```powershell
	cd ToDo_List_Back
	npm install
	```
3. Configura la conexión a MongoDB en `configs/mongo.js` si es necesario.
4. Levanta el servidor localmente:
	```powershell
	npm start
	```
5. Accede a la API en:
	- [http://localhost:3018/api/task](http://localhost:3018/api/task)
	- Documentación Swagger: [http://localhost:3018/api-docs](http://localhost:3018/api-docs)

## Estructura del proyecto
```
index.js
package.json
configs/
  mongo.js
  server.js
  swagger.js
src/
  helpers/
  middlewares/
  task/
```

## Endpoints principales
- `GET /tasks/getTasks` - Listar tareas
- `GET /tasks/getTask/:tid` - Obtener tarea
- `POST tasks/addTask` - Crear tarea
- `PUT /tasks/updateTask/:tid` - Actualizar tarea
- `DELETE /tasks/deleteTask/:tid` - Eliminar tarea

## Notas relevantes
- El archivo `configs/ToDoList.postman_collection.json` contiene ejemplos para pruebas en Postman.
- El rate limiting está configurado en `src/middlewares/rate-limit-validator.js`.
- Validaciones personalizadas en `src/helpers/db-validators.js` y `src/middlewares/task-validators.js`.

## Autor
**Nombre:** Fredy Alexander García Sicajau  
**Email:** alexander.garcia.sicajau@gmail.com
