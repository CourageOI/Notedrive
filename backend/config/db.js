const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const connector = mongoose.connect(process.env.MONGODB_URI, {
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
