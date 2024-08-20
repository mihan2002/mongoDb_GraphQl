const { model, Schema } = require("mongoose");

const recipeSchema = new Schema({
  name: String,
  description: String,
  thumbsUp: {
    type: Number,
    default: 0,
  },
  thumbsDown: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Recipe", recipeSchema);
