import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description:
        "API for managing books and authors. POST, PUT and DELETE endpoints require authentication through GitHub OAuth. Authenticate by visiting /login before testing protected endpoints.",
    },
    servers: [
      {
        url: "https://library-api-9nhf.onrender.com",
      },
      {
        url: "http://localhost:3000",
      },
    ],
  },

  apis: ["./routes/*.js", "./swaggerSchemas.js"],
};

export const swaggerSpec = swaggerJsdoc(options);
