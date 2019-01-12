const express = require("express");
const router = express.Router();

const ToDoController = require('../controllers/toDo');
const checkAuth = require('../middleware/check-auth');

router.get("/toDo", checkAuth, ToDoController.toDo_get);

router.post("/toDo", ToDoController.toDo_post);

router.delete("/toDo", ToDoController.toDo.delete);

module.exports = router;
