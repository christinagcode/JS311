// in express documentation there is "Router" it's main purprose is to pull all
// the main routes it self. But It can't start app on it's own.

// TUTOR where did this comfrom!? !!!!!!!!!!!!!!!!!!!!!!!!
const { resolveSoa } = require("dns");
let express = require("express");

// very rare app uses one object
let router = new express.Router();

let controller = require("../controllers/todosController");

// the whole object is what we're bringing in
// but we want 1 thing out of the object so we add
// controller.
router.get("/todos", controller.listTodos);
router.get("/todos", controller.getTodos);
router.post("/todos", controller.createTodos);
router.put("/todos", controller.updateTodos);
router.delete("/todos", controller.deleteTodos);

// we want this object available OUTSIDE of this file

// we are exporting this file router
module.exports = router;