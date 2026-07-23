import express from "express";
import dotenv from "dotenv";
import authorsRoutes from "./routes/authors.js";
import booksRoutes from "./routes/books.js";
import cors from "cors";
import { connectDB } from "./data/database.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.js";

import session from "express-session";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "library-api-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routes
app.use("/", authRoutes);
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
