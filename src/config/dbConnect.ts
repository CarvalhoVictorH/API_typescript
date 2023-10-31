import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DBMONGO_URL as string); 
        console.log('Db Connected');
    } catch (error) {
        console.error(error);
    }
};

export default dbConnect;
