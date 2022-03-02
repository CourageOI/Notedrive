const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const connector = await mongoose.connect(process.env.MONGO_URL, {
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
