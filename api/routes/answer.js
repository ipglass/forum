const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
    POST_ANSWER_BY_QUESTION_ID,
    GET_All_ANSWERS_BY_QUESTION_ID,
    DELETE_ANSWER_BY_ID
} = require("../controllers/question");

router.post("/question/:id/answers", authMiddleware, POST_ANSWER_BY_QUESTION_ID);
router.get("/question/:id/answers", GET_ALL_ANSWERS_BY_QUESTION_ID);
router.delete("/answer/:id", authMiddleware, DELETE_ANSWER_BY_ID);


module.exports = router;