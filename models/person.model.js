const mongoose = require("mongoose");
const { isNumber } = require("validator");

const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    age: {
      type: Number,
      required: true,
    },
    favoriteFoods: [
      {
        name: String
      }
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Person", personSchema);
