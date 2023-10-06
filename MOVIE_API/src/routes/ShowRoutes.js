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
showRouter.get("/:userId/:showId", auth, isShowInCollection);
showRouter.post("/", auth, createShow);
showRouter.delete("/:showId", auth, deleteShow);

module.exports = showRouter;
