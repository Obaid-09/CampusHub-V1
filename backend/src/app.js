import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "12kb" }));
app.use(express.urlencoded({ extended: true, limit: "12kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.get("/", (req, res) => {
    res.send("CampusHub Backend is running")
});

//routes import
import userRouter from './routes/user.routes.js'
import resourceRouter from './routes/resource.routes.js'

//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/resources", resourceRouter)
// http://localhost:8000/api/v1/users/register
export { app };