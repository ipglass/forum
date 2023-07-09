const mongoose = require("mongoose");
const answerSchema = mongoose.Schema({
  id: { type: String, required: true, min: 6 },
  questionId: {type: String, required: false, min: 6}
  answerText: { type: String, required: true, min: 6 },
  });
module.exports = mongoose.model("Answer", answerSchema);
