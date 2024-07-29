import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
    const { email, password, username } = req.body;


    try {
        //sirve para encryptar con has la contraseña
        const passwordhash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: passwordhash,
        });


        const userSaved = await newUser.save();
        //token para autentificar de manera automatica si ya se autentico previamente 
        const token = await createAccessToken({ id: userSaved._id });

        res.cookie('token', token); //creamos una cookie para que el navegador no tenga que pasar por el proceso de autentificacion mas veces 



        //podemos pasar el objeto entro en el json
        //res.json(userSaved);

        //pero en nuestro caso pasaremos solo los campos necesarios para el front end
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;


    try {
        //buscamos le usaurio en la abse de datos 
        const UserFound = await User.findOne({ email });
        //si no se encuentra devolvemos un error 
        if (!UserFound) return res.status(400).json({ messsage: "User not founded" });

        //sirve para encryptar con has la contraseña
        const isMatch = await bcrypt.compare(password, UserFound.password);

        if (!isMatch) return res.status(400).json({ messsage: "incorrect mails or password" });

        const token = await createAccessToken({ id: UserFound._id });


        res.cookie('token', token); //creamos una cookie para que el navegador no tenga que pasar por el proceso de autentificacion mas veces 

        res.json({
            id: UserFound._id,
            username: UserFound.username,
            email: UserFound.email,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200);
}



export const profile = async (req, res) => {
   
    const userFound = await User.findById(req.user.id);
   
    if (!userFound) return res.status(400).json({
        message: "User not found"
    })

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email : userFound.email,

    })

}



//export const login = (req, res) => res.send('login');