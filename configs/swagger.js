import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const option = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'ToDo List API',
            version: '1.0.0',
            description: 'API documentation for the ToDo List application',
            contact: {
                name: 'Fredy Alexander García Sicajau',
                email: 'alexander.garcia.sicajau@gmail.com'
            }
        },
        servers: [
            {
                url: 'http://127.0.0.1:3018/ToDoList/v1',
            },
        ],
    },
    apis: [
        './src/task/task.routes.js'
    ]
};

const swaggerDocs = swaggerJSDoc(option);

export { swaggerDocs, swaggerUi };