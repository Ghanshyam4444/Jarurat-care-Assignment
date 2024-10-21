require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require("./utils/db");
const serviceRoute = require("./routers/service-router");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  Credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`listning the port number ${port}`);
  });
});
