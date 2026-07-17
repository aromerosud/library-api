import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "API for managing books and authors",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
      {
        url: "https://TU-PROYECTO.onrender.com",
      },
    ],
  },
  apis: ["./routes/*.js", "./swaggerSchemas.js"],
};

export const swaggerSpec = swaggerJsdoc(options);
