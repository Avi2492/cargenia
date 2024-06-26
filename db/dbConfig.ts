import mongoose from "mongoose";

export async function connect() {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already Connected!");
    return;
  }
  if (connectionState === 2) {
    console.log("Connecting....");
    return;
  }

  try {
    const response = await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "rentndrive",
      bufferCommands: true,
    });

    const connectDb = response.connection;

    connectDb.on("Connected", () => {
      console.log("Database Connected Success!");
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
}
