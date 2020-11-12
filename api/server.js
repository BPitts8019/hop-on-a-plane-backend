const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//setup server
const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

//API Routes
server.get("/", (req, res, next) => {
   res.json({
      status: "running",
      db_env: process.env.DB_ENV,
   });
});

module.exports = server;
