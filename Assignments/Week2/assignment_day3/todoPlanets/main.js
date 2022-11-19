let express = require("express");

let app = express();

app.use(express.json());
 
let PORT = 3458;

let db = [];
let nextId = 5621;


// returns summary of all the todo items in the database
app.get("/planets", function(req,res){
    res.json(db);
})

/**
 *  Returns the detail of a single item with the matchining id
 */
app.get("/planets/:id", function(req,res){
    let id = req.params.id;
    let matchingItem;

    for(let i=0;i<db.length;i++){
        let entry = db[i];
        if(entry.id == id){
            matchingItem = entry;
            break;
        }
    }
    res.json(matchingItem);
})

/**
 * Deletes the items with matching id from the database
 * returns ok message
 */

app.delete("/planets/:id", function(req,res){
    let id = req.params.id;

    for(let i=0;i<db.length;i++){
        if(id == db[i].id){
            db.splice(i,1);
            break;
        }
    }
    res.sendStatus(204);
})

/**
 * add an item to the database
 * and return an ok message
 */

app.post("/todos", function(req,res){
    let payload = req.body;
    let task = payload.task;
    let description = payload.description;
    let id = nextId;
    nextId++;
    let element = {
        id: id,
        task: task,
        description: description,
        done: false
    }

    db.push(element);
    res.sendStatus(204);

})

/**
 * Update an item with matcing ID in database
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