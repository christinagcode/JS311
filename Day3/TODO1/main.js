
// bring the express module here
let express = require("express");

// instantiate the application
let app = express();

// allow app to parse jason requests.body
app.use(express.json());

// define the port to run the application 
let PORT = 4234;

// not long term do not do this professional. You want to do this in the DATABASE
// reason because this is going to restart EVERY TIME
let db = []
let nextId = 5345


/**
 * Get /todos:id
 * return a summary of all the todo items in my database 
 */

app.get("/todos", function(req,res){
    res.json(db);
})
/**
 * GET /todos/:id
 * return the details of a single todo item with the matching id 
 */

app.get("/todos/:id", function(req,res){

    // this is how we get info from path params
    // this is the id i'm looking for 
    let id = req.params.id;
    
    // this is where i'll store the item if I find it
    let matchingItem;

    // loop through all the indexes of the array
    for(let i=0; i < db.length; i++){
        //first we read the element
        let entry = db[i];

        // compare the elements
        if(entry.id == id){
            //if the ids match, then store/remember the element at this position/iteration of the array
            matchingItem = entry;
            // break out of the loop since i don't need to keep looking
            break;
        }
    }
    res.json(matchingItem);
})

/**
 * DELETE /todos/:id
 * Delete the todo item with the matching ID from the database
 * return an ok message
 */

app.delete("/todos", function(req,res){
   // get the id the item we want to delete from the path parameter
    let id = req.params.id;

    for(let i=0; i<db.length;i++){
        if(id == db[i]){
            db.splice(i, 1);
            break;
        }
    }

    res.sendStatus(204);
    
})


/**
 * POST /todos
 * Add an item to the datebase 
 * Expecting the request body to look like : 
 * {
 * task: "...",
 * "description": "..."
 * }
 * 
 * return an ok message
 */

app.post("/todos", function(req, res){
    let payload = req.body;
    
    // et task in for from  request body
    let task = payload.task;
    let description = payload.description;  

    // get an id that we can use
    let id = nextId;

    // increment the variable so we get new id.
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
 * Update an item in with the matching ID in the database
 * Expecting the request body to look like:
 * 
 * {
 *      task: "...",
 *         description: "....",
 *         done: false
 * }
 * 
 * return an ok message
 */

app.put("/todos/:id", function(req,res){
    // id comes from path
    let id = req.params.id;
    let matchingItem = db.find(function(element, index){
        // return element.id == id;
        if(element.id = id){
            return true
        } else {
            return false;
        }
        //     return element;
        
    });

    // for(let i = 0; i<db.length; i++){
    //     // if i find a match i'm going to store that match in matching item
    //     if(id == db[i].db){
    //         matchingItem = db[i];
    //         break;
    //     }
    // }

        if(matchingItem){
            matchingItem.task= req.body.task;
            matchingItem.description= req.body.description;
            matchingItem.done = req.body.done == true;
        }

        res.sendStatus(204);
    // but the path comes from body
    //you don't have to separate from id from body

})




/// ---------



app.listen(PORT, function(){
    console.log("application started on Port: ", PORT);
})


// homework.. do the same thing but different IDS make list of things
// delete ... etcetcetetec CLASS NUMBER 3 in book they are making us do a list 
// users

