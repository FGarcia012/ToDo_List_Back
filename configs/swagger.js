import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const option = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'ToDo List API',
            version: '1.0.0',
            description: 'API documentation for the ToDo List application',
        },
        servers: [
            {
                url: 'http://127.0.0.1:3018/ToDo_List/v1',
            },
        ],
    },
    apis: [

    ]
};

const swaggerDocs = swaggerJSDoc(option);

export { swaggerDocs, swaggerUi };