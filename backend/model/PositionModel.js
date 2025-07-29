// PositionModel.js
const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionSchema");

const PositionsModel = model("position", PositionsSchema);

module.exports = { PositionsModel };
