import mongoose from 'mongoose';

const connectToMongoDB = async () => {
  try {
    const connect = await mongoose.connect (process.env.MONGO_URI);
    console.log (`connect to mongodb ${connect.connection.host}`.bgWhite);
  } catch (error) {
    console.log (`error in mongoode ${error}`.bgRed);
  }
};

export default connectToMongoDB;
