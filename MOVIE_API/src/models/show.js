const mongoose = require("mongoose");

const ShowSchema = mongoose.Schema(
  {
    showId: {
      type: Number,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Show", ShowSchema);
