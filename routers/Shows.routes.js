const express = require("express");
const { getAllShows, getAShow, createAShow } = require("../controllers/shows.controller");

const ShowsRouter = express.Router();

ShowsRouter.get("/",getAllShows)

ShowsRouter.get("/:showId",getAShow)

ShowsRouter.post("/create",createAShow)


module.exports = ShowsRouter