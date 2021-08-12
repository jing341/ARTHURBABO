import express from "express";
import RootRouter from "./routers/root.routers";
import { notFound } from "./controllers/root.controllers";

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.use("/", RootRouter);
app.get("/*", notFound);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
