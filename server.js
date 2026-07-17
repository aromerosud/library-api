import express from "express";
import dotenv from "dotenv";
import authorsRoutes from "./routes/authors.js";
import booksRoutes from "./routes/books.js";
import cors from "cors";
import { connectDB } from "./data/database.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routes
app.use("/authors", authorsRoutes);
app.use("/books", booksRoutes);

app.get("/", (req, res) => {
  res.send("Library API running");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
