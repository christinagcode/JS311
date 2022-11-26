

let listTodos = function(req,res){
    res.send(" not yet implemented");
}

let getTodos = function(req,res){
    res.send(" get details not yet implemented");
}

let createTodos = function(req,res){
    res.send("  create not yet implemented");
}

let updateTodos = function(req,res){
    res.send(" update not yet implemented");
}

let deleteTodos = function(req,res){
    res.send(" delete not yet implemented");
}

// in controller we want to export 5 things not 1 thing like in the routers
// first we make an object and we put the 5 things in the object

module.exports = {
    listTodos, getTodos, createTodos, updateTodos, deleteTodos
}