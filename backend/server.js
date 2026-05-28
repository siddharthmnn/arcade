require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protected");

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

// CORS (IMPORTANT)
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


// routes
app.use("/api/user", authRoutes);
app.use("/api/protected", protectedRoutes);

// start server + connect DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log("Server running on " + (process.env.PORT || 5000))
    );
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });
