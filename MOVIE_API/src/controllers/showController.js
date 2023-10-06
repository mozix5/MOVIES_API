const showModel = require("../models/show");
const createShow = async (req, res) => {
  // console.log(req.userId);
  const { showId } = req.body;
  const newShow = await new showModel({
    showId: showId,
    userId: req.userId,
  });
  try {
    await newShow.save();
    res.status(201).json(newShow);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
const deleteShow = async (req, res) => {
  const id = req.params.id;
  try {
    const show = await showModel.findByIdAndRemove(id);
    res.status(202).json(show);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};
const getShow = async (req, res) => {
  try {
    const savedShow = await showModel.find({ userId: req.userId });
    res.status(200).json(savedShow);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
};

const isShowInCollection = async (req, res) => {
  const { userId, showId } = req.params;
  try {
    const isShowPresent = await showModel.find({ userId, showId });
    if (isShowPresent) {
      res.status(200).json({ isShowPresent: true });
    } else {
      res.status(200).json({ isShowPresent: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { createShow, deleteShow, getShow ,isShowInCollection};
