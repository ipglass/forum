const taskSchema = mongoose.Schema({
    id: { type: String, required: true, min: 6 },
    name: { type: String, required: true, min: 3 },
    email: { type: String, required: true, min: 6 },
    password: { type: String, required: true, min: 6 },
    asked_questions_ids: { type: String, required: true, min: 6 }
  });
  module.exports = mongoose.model("User", taskSchema);
