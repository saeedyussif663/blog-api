import mongoose from "mongoose";

const connectionString = process.env.mongo_uri as string;

export default async function connectToDB() {
  try {
    await mongoose.connect(connectionString);
  } catch (error) {
    console.log(error);
  }
}
