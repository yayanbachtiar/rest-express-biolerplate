import express from 'express';
import { HOST, PORT, NODE_ENV } from '~/env'
import swaggerDefinition from '~/core/swagger-deff'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
// middleware
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import slowDown from 'express-slow-down'

const app = express()

// MIDDLEWARE
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 100, // allow 100 requests per 15 minutes, then...
    delayMs: 500 // begin adding 500ms of delay per request above 100:
    // request # 101 is delayed by  500ms
    // request # 102 is delayed by 1000ms
    // request # 103 is delayed by 1500ms
}));


/**
 * Swagger configuration
 */
const options = {
    swaggerDefinition,
    apis: ['./modules/*/rest.js'],
};
const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))