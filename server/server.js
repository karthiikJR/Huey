import express from "express";
import { AuthRoutes } from "./routes/Auth.js";
import { ColorAuth } from "./routes/Colors.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();


const corsOptions = {
	origin: process.env.CORS_ORIGIN,
	credentials: true,
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/auth", AuthRoutes);
app.use("/colors", ColorAuth);

app.listen(3000, () => console.log("Server is running on port 3000"));
