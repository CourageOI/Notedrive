const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    MONGO_URL0 =
      "mongodb+srv://CourageOI:Courage727@cluster0.rc2zj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const connector = await mongoose.connect(MONGO_URL0, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `DB is connected: ${connector.connection.host}/${connector.connection.name}`
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectToDB;
