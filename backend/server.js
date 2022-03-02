const express = require("express");
const dotenv = require("dotenv");
const connectToDB = require("./config/db");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middleWares/errorMiddleWares");

const app = express();
dotenv.config();
app.use(cors());
connectToDB();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server running on Port ${PORT}`));
