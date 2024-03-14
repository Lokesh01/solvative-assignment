import { connect, disconnect } from "mongoose";
export async function connectToDatabase() {
  try {
    await connect(`${process.env.MONGODB_URL}`);
    console.log("DB connection successful !");
  } catch (error) {
    console.log(error);
    throw new Error("connection failed to DB :(");
  }
}

export async function disconnectFromDatabase() {
  try {
    await disconnect();
    console.log("disconnected from DB successfully !");
  } catch (error) {
    console.log("failed to disconnect from DB");
    throw new Error("error in diconnecting from DB");
  }
}
