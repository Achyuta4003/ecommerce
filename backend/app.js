import express from "express";
import catchAsyncErrors from "./middleware/catchAsyncErrors.js";
import errorMiddleware from "./middleware/error.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import bodyParser from "body-parser";
import fileupload from "express-fileupload";
import dotenv from "dotenv";
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: "backend/config/config.env" });
}



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(fileupload())


//Route import
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
import orderRoute from "./routes/orderRoute.js";
import paymentRoute from "./routes/paymentRoute.js";

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", paymentRoute);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//Middleware for Error
app.use(errorMiddleware);

export default app;