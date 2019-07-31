const swaggerDefinition = {
  info: {
    // API informations (required)
    title: 'An example api ', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'A sample API', // Description (optional)
  },
  basePath: '/', // Base path (optional)
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  security: [
    {
      Bearer: [],
    },
  ],
};

export default swaggerDefinition;
