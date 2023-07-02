const taskSchema = mongoose.Schema({
    id: { type: String, required: true, min: 6 },
    question_text: { type: String, required: true, min: 6 },
    answer_ids: {  type: String, required: true, min: 6 }
    });
      module.exports = mongoose.model("Question", taskSchema);
    