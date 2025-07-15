import express from "express";
import cors from "cors";
import 'dotenv/config';
import authRouter from './src/routes/auth.routes.js';
import { authentication } from "./src/middlewares/authentication.js";
import productsRouter from "./src/routes/products.router.js";

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//   res.json({ message: "En mantenimiento" });
// });

// Routers
app.use('/auth', authRouter);
app.use('/api', authentication, productsRouter);

// Ruta raíz
app.get("/", (req, res) => {
  res.json({ message: "API Rest en Node.js" });
});


app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
