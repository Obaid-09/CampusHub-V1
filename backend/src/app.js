import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { swaggerDocs } from "./docs/swagger.js";
import helmet from "helmet";
import morgan from "morgan";
import { apiLimiter } from "./middlewares/rateLimit.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// Security Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(
    helmet({
        crossOriginResourcePolicy: {
            policy: "cross-origin",
        },
    })
);

// Logging & Rate Limiting
app.use(morgan("dev"));
app.use("/api", apiLimiter);

// Body Parsing
app.use(cookieParser());
app.use(express.json({ limit: "12kb" }));
app.use(express.urlencoded({ extended: true, limit: "12kb" }));

// Static Files
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.send("CampusHub Backend is running")
});

//routes import
import userRouter from './routes/user.routes.js'
import resourceRouter from './routes/resource.routes.js'
import adminRouter from './routes/admin.routes.js'
import dashboardRouter from "./routes/dashboard.routes.js";
import profileRouter from "./routes/profile.routes.js";
import categoryRouter from "./routes/category.routes.js";
import reviewRouter from "./routes/review.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/resources", resourceRouter)
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/dashboard", dashboardRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/reviews", reviewRouter);
// http://localhost:8000/api/v1/users/register



// API Docs
swaggerDocs(app);

// Global Error Handler
app.use(errorHandler);

export { app };
