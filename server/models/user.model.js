import mongoose from "mongoose";


//Crear el esquema significa crear el objeto que queremos validar en este caso el usuario 
//por tanto el schemea es el modelo de como se van a guardar estos datos en MongoDB 
const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required : true,
        trim:true
    },
    email: { 
        type: String, 
        required : true,
        trim:true,
        unique:true
    },
    password: {
        type: String,
        required : true,
    }
},{
    timestamps: true
})

// basado en el esquema creado 8 userschema, le ponemos el nombre user, y ahora luego mongo db creara una coleccion de users y guardara ahi la infomracion 
export default mongoose.model('User',userSchema)