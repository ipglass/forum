const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
    POST_QUESTION,
    GET_QUESTION_BY_ID,
    GET_ALL_QUESTIONS,
    DELETE_QUESTION_BY_ID
} = require("../controllers/question");

router.post("/question", authMiddleware, POST_QUESTION);
router.get("/question/:id", GET_QUESTION_BY_ID);
router.get("questions", GET_ALL_QUESTIONS);
router.delete("/question/:id", authMiddleware, DELETE_QUESTION_BY_ID);


module.exports = router;