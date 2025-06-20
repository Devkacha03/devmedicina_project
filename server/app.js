const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Database connected Successfully");
  })
  .catch((error) => {
    console.error("💥 Error connecting to the database : ", error);
  });

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("🙏 Welcome to DevMedicina");
});

app.listen(5000, () => {
  console.log(`✅ Server is running on port 5000`);
});
