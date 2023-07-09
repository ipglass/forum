const mongoose = require("mongoose");
const questionSchema = mongoose.Schema({
    id: { type: String, required: true, min: 6 },
    questionText: { type: String, required: true, min: 6 },
    answersIds: {  type: Array, required: true, min: 6 }
    });
      module.exports = mongoose.model("Question", questionSchema);
    