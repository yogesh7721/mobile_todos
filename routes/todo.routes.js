const router = require("express").Router()
const TodoController = require('../controller/Todo.controller')

router
    .get("/todos", TodoController.getTodos)
    .post("/add-todo", TodoController.AddTodo)
    .put("/update-todo/:id", TodoController.UpdateTodo)
    .delete("/delete-todo/:id", TodoController.DeleteTodo)


module.exports = router