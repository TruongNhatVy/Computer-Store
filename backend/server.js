import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import ProductRouter from "./routers/ProductRouter.js";

const app = express();
const PORT = process.env.PORT || 5007;
const userName = "vytruong";
const password = "truongnhatvY0";
const databaseName = "ComputerStore";
const cluster = "@cluster0.m4rmngd.mongodb.net";
const URL =
  "mongodb+srv://" + userName + ":" + password + cluster + "/" + databaseName;

//add system services
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.set("json spaces", 2); //formatted Json

//routers
app.use("/", ProductRouter);

//connect MongoDb
mongoose
  .connect(URL, { useNewUrlParser: true, useUniFiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDb");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connected DB Fail");
  });
