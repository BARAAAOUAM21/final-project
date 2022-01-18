const {
  addNewInstractor,
  getAllThem,
  getoneofthem,
  deleteinstractor,
  updateinstractor,
  login,
} = require("../Controlles/instractorControlle");
const instractorMiddleware = require("../Mmiddelewears/instractorMiddelwears");

const express = require("express");
const Router = express.Router();

Router.post("/addnewinstractor", addNewInstractor);
Router.post("/login", login,instractorMiddleware);
Router.get("/getAllThem", getAllThem);
Router.get("/getoneofthem/:id", getoneofthem);
Router.delete("/deleteinstractor/:id",instractorMiddleware,deleteinstractor);
Router.put("/updateinstractor/:id", instractorMiddleware,updateinstractor);

module.exports = Router;
