import {HOST, PORT}from '~/env'

const host = `http://${HOST}:${PORT}`;


const swaggerDefinition = {
    info: {
        // API informations (required)
        title: 'An example api ', // Title (required)
        version: '1.0.0', // Version (required)
        description: 'A sample API', // Description (optional)
    },
    host: host, // Host (optional)
    basePath: '/', // Base path (optional)
};

export default swaggerDefinition;
