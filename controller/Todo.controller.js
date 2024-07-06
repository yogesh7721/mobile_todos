const asynchandler = require("express-async-handler")
const Todo = require("../modal/Todo")


exports.getTodos = asynchandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "Todo Fetch Success", result })
})
exports.AddTodo = asynchandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "Todo Add Success" })

})
exports.UpdateTodo = asynchandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Todo Update success" })
})
exports.DeleteTodo = asynchandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "Todo delete Success" })
})