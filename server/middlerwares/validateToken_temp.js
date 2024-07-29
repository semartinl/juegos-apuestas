import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: "no token,autorizacion denagada" });

    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Invalid token" });

        req.user = decoded.payload; // Asegúrate de asignar el payload directamsente
    
        next();
    });
};