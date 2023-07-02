const mongoose = require("mongoose");
const questionSchema = mongoose.Schema({
    id: { type: String, required: true, min: 6 },
    question_text: { type: String, required: true, min: 6 },
    answer_ids: {  type: Array, required: true, min: 6 }
    });
      module.exports = mongoose.model("Question", questionSchema);
    