const express = require("express");
const auth = require("../middlewares/auth");
const {
  createShow,
  deleteShow,
  getShow,
  isShowInCollection,
} = require("../controllers/showController");
const showRouter = express.Router();

showRouter.get("/", auth, getShow);
showRouter.get("/:id/:showId", auth, isShowInCollection);
showRouter.post("/", auth, createShow);
showRouter.delete("/:id", auth, deleteShow);

module.exports = showRouter;
