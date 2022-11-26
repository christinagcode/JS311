// bringing in express library
let express = require("express");

// inside source we're separating routes and my logic. routes is the thing the defines what routes
// your application have available
let app = express();

app.use(express.static("public"));

let PORT = 5229;

app.use(express.json());

// I want to defined my routes somewhere else.  Before we did app.get
// app.post(...) - app.delete(...)
// we want to define somewhere else. The app aobject is driving everything.
// We're going to defined our routes somewhere else but I want my APP to use 
// it .

// this is bringing IN whatever we're exporting
let routes = require("./routes/todoRoutes");

app.use(routes);

app.listen(PORT, function(){
    console.log("App starting on PORT: ", PORT)
})