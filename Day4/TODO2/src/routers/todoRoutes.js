let express = require("express");

let routers = new express.Router();

let controllers = require("./controllers/todosControllers.js");

routers.get("/todos", controllers.listTodos);
routers.get("/todos/:id", controllers.getTodos);
routers.post("/todos", controllers.createTodos);
routers.put("/todos/:id", controllers.updateTodos);
routers.delete("/todos/:id", controllers.deleteTodos);

// making router available to export
module.exports = routers;