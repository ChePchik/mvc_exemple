const express = require("express");
const { getUser, postUser } = require("../contoller");
// const { getUser } = require("../contoller");
const router = express.Router();

router.get("/user", getUser);

router.post("/user/:id", postUser);
// .delete("/user/:id", getUser)

module.exports = router;
