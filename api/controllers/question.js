const QuestionModel = require("../models/question");
const UserModel = require("../models/user");
const uniqid = require("uniqid");

const jwt = require("jsonwebtoken");

module.exports.POST_QUESTION = async (req, res) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;
        const question = new QuestionModel({
            id: uniqid(),
            questionText: req.body.questionText,
            answerIds: [],
            userId: userId
        });

        const saveQuestion = await question.save();

        UserModel.updateOne({ id: user Id }, { $push: { askedQuestionsIds: savedQuestionId } }).exec();

        res.status(200).json({ response: "Question was saved successfully" });
    } catch (err) {
        res.status(401).json({ response: "Invalid token" });
    }
};

module.exports.GET_QUESTION_BY_ID = async (req, res) => {
    const question = await QuestionModel.find({ id: req.params.id });
    res.status(200).json({ response: question });
};

module.exports.DELETE_QUESTION_BY_ID = async (req, res) => {
    await QuestionModel.deleteOne({ id: req.params.id });
    res.status(200).json({ response: "Question was deleted" });
};

module.exports.GET_All_QUESTIONS = async (req, res) => {
    const questions = await QuestionModel.find();
    res.status(200).json({ response: questions });
};








