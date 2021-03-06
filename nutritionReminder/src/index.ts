import mongoose from "mongoose";
import { app } from "./app";
const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/schedulenf", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("connected to nutritionSchedule Reminder mongodb");
  } catch (err) {
    console.log(err);
  }
  app.listen(3032, () => {
    console.log("nutritionReminder Listening on port 3022");
  });
};
start();
