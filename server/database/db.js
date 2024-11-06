import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try{
        const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.mj2km.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
        await mongoose.connect(mongoUri);
        console.log('MongoDB Connected')
    }catch(error){
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;