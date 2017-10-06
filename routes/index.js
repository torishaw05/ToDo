const express = require("express");
const router = express.Router();

let todos= [];
let complete = [];


router.get('/', function(req, res) {
  res.render('list', {todos: todos, complete: complete})

});

router.post('/list', function(req,res) {
  let obj = {task: req.body.task, complete:false, id: todos.length +1};
  todos.push(obj);
  res.redirect('/')
})

router.post('/list/:id', function(req,res) {
  let todo = todos.find(function(todo){
    return todo.id == req.params.id;
  })
  let index= todos.indexOf(todo);
  todos.splice(index, 1)
  complete.push(req.body.task)
  res.redirect('/')
})

module.exports = router;
