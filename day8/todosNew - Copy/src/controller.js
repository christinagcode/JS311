let db = require("./db.js");

let addItem = function(req,res){

    let t = req.body.task;
    let d = req.body.description;
    let sql = "INSERT INTO todos (task, description) values (?, ?)";
    let params = [t, d];

    db.query(sql, params, function(err, results){
        if(err){
            res.sendStatus(500);
        } else {
            res.sendStatus(202);
        }
    })
}

let editItem = function(req,res){

    let id = req.params.id;
    let task = req.body.task;
    let flag = req.body.done;
    let descrip = req.body.description;

    let sql = "UPDATE todos set task = ?, done = ?, description = ?, id = ?"
    let params = [task, flag, descrip, id];

    db.query(sql, params, function(err, results){
        if(err){
            res.sendStatus(500);
        } else {
            res.sendStatus(202);
        }
    })
}

let listItem = function(req,res){
    // code to list summary of all items goes here...

    //SQL: SELECT id, done, task FROM todos;
    db.query("SELECT id, done, task FROM todos", function(err, results){
        if(err){
            console.log("Failed to fetch todos from database", err);
            res.sendStatus(500);
        } else { 

            results.forEach(function(results){
                if(results.done){
                    results.done = true;
                } else {
                    results.done = false;
                }
            });

            res.json(results);
        }
    })
}

let getItem = function(req,res){
     // SQL: SELECT id, task, done, description from todos where id = ?
     let id = req.params.id;

     // to save your self from sql injection you separate your sql statement in two parts.
     let sql = "SELECT id, task, done, descripton from todos where id = ? "
     let params = [id];
     db.query(sql, params, function(err, results){
        if(err){
            res.sendStatus(500);
        } else {
            // res.json(results);
            if(results.length == 0){
                res.json(nul);
            } else {
                if(results[0].done){
                    results[0].done = true;
                } else {
                    results[0].done = false;
                }
                res.json(reults[0]);
            }
        }
     })
}

let deleteItem = function(req,res){

    let id = req.params.id;

    let sql = "DELETE from todos where id = ?"
    let params = [id];

    db.query(sql, params, function(err, results){
        if(err){
            req.sendStatus(500);
        } else {
            res.sendStatus(202);
        }
    })
    
}

module.exports = {
    addItem, editItem, listItem, getItem, deleteItem
}