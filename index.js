import exrpess from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import classRoutes from "./routes/class.js";

const app = exrpess();

app.use(exrpess.json({ limit: "30mb", extended: false }));
app.use(exrpess.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/class", classRoutes);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const CONNECTION_URL =
  "mongodb+srv://jstmaybe:dat141096@awclasscluster.5ttxz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
  )
  .catch((error) => {
    console.log(error);
  });

export default app;
