import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(json());
app.use(cors());

import routes from "./routes/comentario.route.js";

const mongoURI = process.env.MONGO_URI;

connect(mongoURI)
  .then(() => console.log("MongoDB está conectado..."))
  .catch((error) => {
    console.log("Error al conectar con MongoDB:", error);
    process.exit(1);
  });

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Prueba-X");
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
