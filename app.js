const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 5000;

//Modified this --> Connecting with database
mongoose
  .connect("mongodb+srv://Ramneek:iamunique@cluster0.cyzml.mongodb.net/JWT", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
  .catch((err) => console.log(err));
