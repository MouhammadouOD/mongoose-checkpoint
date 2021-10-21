const Person = require("../models/person.model");

module.exports.addPerson = async (req, res) => {
  const { name, age, favoriteFoods } = req.body;
  try {
    const person = await Person.create({ name, age, favoriteFoods });
    res.status(201).json({ person: person._id });
  } catch (err) {
    console.log(err);
  }
};

module.exports.getAllPersons = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateUser = async (req, res) => {
    
}