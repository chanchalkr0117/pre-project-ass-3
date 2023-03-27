const mongoose = require("mongoose");

const conn = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("connected succesfully");
    }
  );
};

module.exports = conn;
