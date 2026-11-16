import express from "express";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/register", (req, res) => {
  res.render("register", { title: "Регистрация на портале" });
});

app.post("/login", (req, res) => {
  res.send(`
        Логин ${req.body.login} <br> <br> зарегистрирован`);
});

app.get("/", (req, res) => {
  res.send("Конференция.РФ");
});

app.get("/about", (req, res) => {
  res.send("О портале");
});

app.get("/contact", (req, res) => {
  res.send("Контакты");
});

app.listen(PORT, () => {
  console.log(`Сервер: http://localhost:${PORT}`);
});
