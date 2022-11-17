let express = require("express");

let app = express();

app.use(express.static("public"))

let PORT = 9358;

app.use(express.json());

// this brings in whatever we exported
let routes = require("./routers/todoRoutes.js");

app.use(routes);


app.listen(PORT, function(){
    console.log("Application started on PORT:", PORT);
})