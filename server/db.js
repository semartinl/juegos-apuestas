import mongoose, { connect } from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://jrodriguezverdecia:Is2AmmNwKBvwxFYX@clusterapuestas.ril26k3.mongodb.net/?retryWrites=true&w=majority&appName=ClusterApuestas');
        console.log("db is connected");
    } catch (error) {
        console.log(error);
    }
}