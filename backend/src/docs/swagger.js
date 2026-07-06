import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "CampusHub API",
            version: "1.0.0",
            description:
                "REST API documentation for CampusHub - A MERN based Campus Resource Sharing Platform.",
            contact: {
                name: "Obaidullah",
                email: "your-email@example.com",
            },
        },

        servers: [
            {
                url: "http://localhost:8000/api/v1",
                description: "Local Development Server",
            },
        ],

        tags: [
            {
                name: "Authentication",
                description: "Authentication related APIs",
            },
            {
                name: "Users",
                description: "User related APIs",
            },
            {
                name: "Resources",
                description: "Resource related APIs",
            },
        ],

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },

        security: [
            {
                bearerAuth: [],
            },
        ],
    },

    apis: [
        "./src/docs/*.js",
        "./src/routes/*.js",
        "./src/controllers/*.js",
    ],
};

const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app) => {

    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec, {
            explorer: true,
            customSiteTitle: "CampusHub API Docs",
        })
    );

};