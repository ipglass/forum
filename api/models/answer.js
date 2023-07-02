const taskSchema = mongoose.Schema({
    id: { type: String, required: true, min: 6 },
    answer_text: { type: String, required: true, min: 6 },
    gained_likes_number: {  type: Number, required: true, min: 1 } 
    });
      module.exports = mongoose.model("Answer", taskSchema);
    