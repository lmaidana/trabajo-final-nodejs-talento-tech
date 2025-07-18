import express from "express";
import { join, __dirname } from "./utils/index.js";
import { db } from './config/db.js';
import cors from "cors";
import productRoutes from "../src/routes/product.route.js";

//settings
const app = express();
app.set("PORT", 3000);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

app.use("/products", productRoutes);

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Servidor corriendo en http://localhost:${app.get("PORT")}`);
});