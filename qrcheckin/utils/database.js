import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('Already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI , {
            dbName: "StudentDB",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
        console.log('Connected')
    } catch (error) {
        console.log(error);
    }
}