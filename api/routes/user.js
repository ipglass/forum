const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
    INSERT_USER,
    LOGIN,
    GET_JWT_TOKEN
} = require("../controllers/user");
module.exports = router;