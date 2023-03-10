const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//   routes import
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

const app = express();
dotenv.config();
// connecting database
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
//rouets
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.listen(4000, () => {
  console.log("server is running");
});
