const express = require("express");
const { getUserDB, postUserDB } = require("../model");
const router = express.Router();

const getUser = (req, res) => {
	const users = getUserDB();
	// []
	if (!users || users.length == 0) return res.status(401).json("Пользователей нет");
	else return res.status(200).json(users);
};
const postUser = (req, res) => {
	const users = postUserDB(req.body, req.params.id);
	if (!users) return res.status(401).json("Пользователей нет");
	else return res.status(200).json("Пользователь добавлен");
};

module.exports = { getUser, postUser };
