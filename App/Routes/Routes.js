module.exports = (App) => {
  const express = require("express");
  const router = express.Router();
  const Login = require("../Controllers/LoginController");

  // AUTH
  router.get("/auth/login", Login.Login);
  router.post("/message", Login.postMessage);
  router.get("/getMessage", Login.getMessage);
  router.delete("/deleteMessage", Login.deleteMessage);

  App.use("/api", router);
};
