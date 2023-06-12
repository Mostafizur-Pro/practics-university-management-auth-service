import mongoose from "mongoose";
import config from "./config";
import app from "./app";

// main().catch((err) => console.log(err));

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`Database is Connected successfully`);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log("Failed to connection in database");
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

boostrap();
