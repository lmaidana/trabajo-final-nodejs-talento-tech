import express from "express";
import { join, __dirname } from "./utils/index.js";
import { db } from './config/db.js';
import cors from "cors";
import productRoutes from "../src/routes/product.route.js";
import authRouter from "../src/routes/auth.route.js";
import bodyParser from "body-parser";

//settings
const app = express();
app.set("PORT", 3000);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
//routes
app.get("/", (req, res) => {
  res.json({ title: "Página de inicio" });
});

app.use("/products", productRoutes);
app.use("/auth", authRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Ruta no encontrada",
    path: req.originalUrl,
  });
});


//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Servidor corriendo en http://localhost:${app.get("PORT")}`);
});