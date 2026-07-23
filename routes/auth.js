import express from "express";
import passport from "passport";

const router = express.Router();

// Login GitHub
router.get(
  "/login",
  passport.authenticate("github", { scope: ["user:email"] })
);

// Callback GitHub
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/api-docs",
  }),
  (req, res) => {
    res.redirect("/api-docs");
  }
);

// Logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }

    res.redirect("/api-docs");
  });
});

export default router;