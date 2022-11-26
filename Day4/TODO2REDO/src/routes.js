// in express documentation there is "Router" it's main purprose is to pull all
// the main routes it self. But It can't start app on it's own.

const { resolveSoa } = require("dns");
let express = require("express");

let router = new express.Router();


router.get("/todos", function(req,res){
    res.send(" not yet implemented");
})

router.get("/todos/:id", function(req,res){
    res.send(" get details not yet implemented");
})

router.post("/todos", function(req,res){
    res.send("  create not yet implemented");
})

router.put("/todos/:id", function(req,res){
    res.send(" update not yet implemented");
})

router.delete("/todos/:id", function(req,res){
    res.send(" delete not yet implemented");
})


// we want this object available OUTSIDE of this file

// we are exporting this file router
module.exports = router;