import express from 'express';
import { HOST, PORT, NODE_ENV } from '~/env'
import swaggerDefinition from '~/core/swagger-deff'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
const app = express()
const options = {
    // Import swaggerDefinitions
    swaggerDefinition,
    // Path to the API docs
    // Note that this path is relative to the current directory from which the Node.js is ran, not the application itself.
    apis: ['./modules/*/rest.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))