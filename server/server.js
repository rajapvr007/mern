const express = require("express");
const app = express();
const AuthRouter = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/errorMiddleware");
const router = require("./router/contact-router");
const cors = require("cors");
require("dotenv").config();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
//middleware to parse the request body as JSON
app.use(express.json());

app.use(AuthRouter);
app.use(router);

app.use(errorMiddleware);
const port = 5000;
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
