import express from "express";
import router from "./routes/route.js";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Running on Port 5000");
});

app.listen(PORT, () => {
  console.log(`Listening To Port ${PORT}`);
});
