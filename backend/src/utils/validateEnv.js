const requiredEnvVariables = [
    "PORT",
    "MONGODB_URI",

    "ACCESS_TOKEN_SECRET",
    "ACCESS_TOKEN_EXPIRY",

    "REFRESH_TOKEN_SECRET",
    "REFRESH_TOKEN_EXPIRY",

    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",

    "CORS_ORIGIN"
];

export const validateEnv = () => {

    const missingVariables = requiredEnvVariables.filter(
        (variable) => !process.env[variable]
    );

    if (missingVariables.length > 0) {

        console.error("\n❌ Missing Environment Variables:\n");

        missingVariables.forEach(variable => {
            console.error(`   • ${variable}`);
        });

        console.error("\nPlease update your .env file.\n");

        process.exit(1);
    }

    console.log("✅ Environment variables validated successfully.\n");

};