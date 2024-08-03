import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from 'cors'
import authRoutes from "./routes/auth.route.js"; // Importa sin destructuración
import gamesRoutes from "./routes/games.routes.js";

const app = express();

//el modulo morgan sirve como logguer para ver las peticiones del servidor 
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", gamesRoutes);

app.get("/api", (req, res) => {
    res.json({ "users": ["UserOne,UserTwo"] })
});


export default app;