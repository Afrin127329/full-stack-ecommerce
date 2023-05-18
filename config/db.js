import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
     mongoose.connect(process.env.MONGO_URL);
    console.log(
      'Conneted To Mongodb Database'
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`);
  }
};

export default connectDB;
