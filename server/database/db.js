import mongoose from 'mongoose';
const connectDB = async () => {
    try{
        await mongoose.connect(
            'mongodb+srv://borekamohelo:4g1AYOJKAKMeyXpd@cluster0.mj2km.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        );
        console.log('MongoDB Connected')
    }catch(error){
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;