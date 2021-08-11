import express from "express";

const app = express();
const port = 8000;

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/signup", (_, res) => res.render("signup"));
app.get("/*", (_, res) => res.render("404"));

const handleListen = () => console.log(`Listening on http://localhost:${port}`);

app.listen(port, handleListen);
