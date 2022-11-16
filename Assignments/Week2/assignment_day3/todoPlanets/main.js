let express = require("express");

let app = express();

app.use(express.json());

let PORT = 3924;

// should not be used outside of this assignment. this is just to demonstrate
let db = []
let nextId = 2345

/**
 * Get /todos:id
 * return a summary of all the todo items in database
 */

app.get("/planets", function(req,res){
    res.json(db);
})

/**
 *  GET /todos/:id
 * return details of the single planet item with matching id 
 */

// how we get the id from the path parameters
app.get("/planets/:id", function(req,res){

    // id I'm looking for    
    let id = req.params.id;

    // this is where I'll store my item if I find it.
    let matchingItem;

    // loop through all the indices  of the array
    for(let i=0; i<db.length;i++){

        // read the element out of the position
        let entry = db[i];
        // compare the element's id to the id i am looking for
        if(entry.id == id){
            // if the ids match, then store/remember element in this position/iteration of the array
            matchingItem = entry;

            //can't do returns because it'll exit the function
            // so we use break to get out of the LOOP since we don't need to keep looking
            break;
        }
    }
    
    // its either going to undefined, empty, or hold the item that matches
    res.json(matchingItem);
})

/**
 * DELETE /planets/:id
 * Delete todo item with the matching id from database
 * return ok message
 */

app.delete("/planets/:id", function(req,res){
   // get the id of the item we want to delete from the path
    let id = req.params.id;

    for(let i=0;i<db.length;i++){
        if(id == db[i].id){
            db.splice(i, 1);
            break;
        }
    }
    res.sendStatus(204);
})




/**
 * POST /planets
 * Add the item to the database
 * 
 * Return ok message
 */

app.post("/planets", function(req,res){
    let payload = req.body;

    // get info from request body
    let task = payload.task;
    let description = payload.description;

    // get an id that we can use
    let id = nextId;

    // increment the variable so we get a new id
    nextId++;

    let element = {
        id: id,
        task: task,
        description: description,
        done: false
    }


db.push(element);

res.sendStatus(202); // no data return

})

/**
 * PUT /todos/:id
 * Update an item in the matching id in DB 
 * combo of get/post. we need to find it to update it specific item
 * we need to up date with the things we need to request
 * and out of the body and into the item
 */

app.put("/todos/:id", function(req,res){
    // pick up at 2:35 in lecture

    // we are choosing to get the id from path but everything else 
     // comes from the body. there can be other ways
    let id = req.params.id;
    
    for(let i=0;i<db.length;i++){
        if(id == db[i].id){
            matchingItem = db[i];
            break;
        }
    }
})





app.listen(PORT, function(){
    console.log("Planet App started on PORT: ", PORT);
})
   





/**
 * copy paste info so I don't have to type it everytime
 * 
 * 
    {
        "task": "Mercury is the closest to the Sun.",
        "description": " It is the smallest planet in our Solar System."
    }
    {
        "task": "Saturn is the sixth planet from the Sun.",
        "description": "It is the second-largest in the Solar System, after Jupiter."
    }
    {
        "task": "Neptune is the eighth planet from the Sun.",
        "description": "It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet."
    }
 */