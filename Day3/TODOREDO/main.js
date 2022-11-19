let express = require("express");

let app = express();

app.use(express.json());

let PORT = 9243;

let db = []
let nextId = 3458;

/**
 * GET /todos
 * return a summary of all the todo items in my database
 */
app.get("/todos", function(req,res){
    res.json(db); // sends the entire database back
})

/**
 * Get /todos/:id
 * return the details of single todo item with the matching id
 */
app.get("/todos/:id", function(req,res){

    // this is the id i am looking for 
    let id = req.params.id;
    // this is where I will store the item, if I find it
    let matchingItem;

    // loop through all the position of the array
    for(let i=0; i<db.length; i++){
        // read the element out of the position
        let entry = db[i];
        // compare the element's id to the id i am looking for 
        if(entry.id == id){
            // if the ids match, then store/ remember the element at this position/iteration of the array
            matchingItem = entry;
            // break out the loop since i do not need to keep looking
            break;
        }
    }
    res.json(matchingItem);
})

/**
 * DELETE /todos/:id
 * Delete the todo item with the matching id from the database
 * return an ok message
 */

app.delete("/todos/:id", function(req,res){
    // get the id of the item we want to delte from the path
    let id = req.params.id;

    for(let i=0; i<db.length; i++){
        if(id == db[i].id){
            db.splice(i, 1);
            break;
        }
    }

    res.sendStatus(204);
})

/**
 * POST /todos
 * Add an item to the database
 * Expecting the request body to look like:
 * {
 * task:"...",
 * "description": "..."
 * }
 * 
 * return an ok message
 */

// get task info from request body
app.post("/todos", function(req,res){
    let payload = req.body;
    let task = payload.task;
    let description = payload.description;
    
    // get an id tha we can use
    let id = nextId;

    //increment the variable holding the id, so the next time we get a new id 
    nextId++;

    let element ={
        id: id,
        task: task,
        description: description,
        done: false
    }

    db.push(element);

    res.sendStatus(204); // no data back
})

/**
 * PUT /todo/:id
 * Update an item in with the matching id in the database
 * Expecting the request body to look like:
 * 
 */

app.put("/todos/:id", function(req,res){
    
    let id = req.params.id;
    let matchingItem = db.find(function(element, index){
       if(element.id == id){
        return true 
       } else {
        return false;
       }
    });

    // for(let i=0;i<db.length;i++){
    //     if(id == db[i].id){
    //     matchingItem = db[i];
    //     break; 
    //     }
    // }

    if(matchingItem){
        matchingItem.task = req.body.task;
        matchingItem.description = req.body.description;
        matchingItem.done = req.body.done == true;
    }
    res.sendStatus(204);
})



app.listen(PORT, function(){
    console.log("App is running on PORT: ", PORT);
})