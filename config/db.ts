import mongoose from "mongoose";

export const connect = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false,
    };
    await mongoose.connect(process.env.DB_URL as string, options);
    console.log("connect to db");
  } catch (err) {
    console.log(err);
  }
};
