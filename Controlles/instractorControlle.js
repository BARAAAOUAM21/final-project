const instractors = require("../models/instractorSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");

//add instractor
const addNewInstractor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const instractor = await instractors.findOne({ email });
    if (instractor) {
      return res.status(400).json({ message: "instractor already exists" });
    } else {
      const hashed = await bcrypt.hash(password, saltRounds);
      const newInstractor = new instractors({ ...req.body, password: hashed });
      await newInstractor.save();
      return res.status(200).json({
        message: "instractor added successfully",
        newInstractor,
      });
    }
  } catch (error) {
    return res.status(400).json({ message: "is not true" });
  }
};

//get instractors
const getAllThem = async (req, res) => {
  try {
    const getInstractor = await instractors.find();
    return res.json({
      message: "instructor get it successfully",
      getInstractor,
    });
  } catch (error) {
    return res.json({ message: error });
  }
};
//get oneinstractorrbyid
const getoneofthem = async (req, res) => {
  try {
    const getoneofthem = await instractors.findById(req.params.id).populate('listOfFeedBack');
    return res.json({ message: "instractor found successfully", getoneofthem });
  } catch (error) {
    return res.json({ message: error });
  }
};
//  deleteinstractor
const deleteinstractor = async (req, res) => {
  try {
    await instractors.findByIdAndDelete(req.params.id);
    return res.json({ message: "instractor deleted successfully" });
  } catch (error) {
    return res.json({ message: error });
  }
};
//updateinstractor
const updateinstractor = async (req, res) => {
  try {
    const updateinstractor = await instractors.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { new: true }
    );
    return res.json({
      message: "instractor updated successfully",
      updateinstractor,
    });
  } catch (error) {
    return res.json({ message: error });
  }
};
// login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const instractor = await instractors.findOne({ email });
    console.log(email);
    if (!instractor) {
      return res.json({ message: "bad credentials" });
    } else {
      const match = await bcrypt.compare(password, instractor.password);
      console.log(match);
      if (!match) {
        return res.json({ message: "bad credentials" });
      } else {
        var token = jwt.sign({ id: instractor._id }, process.env.privateKey);
        console.log(token);
        return res.json({
          message: "instractor loggedIn successfully",
          instractor: instractor,
          token,
        });
      }
    }
  } catch (error) {
    return res.json({ message: error });
  }
};

module.exports = {
  addNewInstractor,
  getAllThem,
  getoneofthem,
  deleteinstractor,
  updateinstractor,
  login,
};
