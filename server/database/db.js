import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (attempt = 1) => {
    try {
        const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.mj2km.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

        await mongoose.connect(mongoUri);

        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`Connection failed (Attempt ${attempt}):`, error.message);

        if (attempt < 5) {
            const delay = Math.pow(2, attempt) * 1000; 
            console.log(`Retrying connection in ${delay / 1000} seconds...`);
            for (let i = delay / 1000; i > 0; i--) {
                setTimeout(() => {
                    process.stdout.write(`\rRetrying connection in ${i} seconds...`);
                }, (delay / 1000 - i) * 1000);
            }
            setTimeout(() => connectDB(attempt + 1), delay); 
        } else {
            console.error('Exceeded maximum retry attempts. Could not connect to MongoDB.');
            process.exit(1);
        }
    }
};

export default connectDB;