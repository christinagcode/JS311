let express = require("express");
let app = express();

app.use(express.json());

let routes = require("./routes.js");
app.use(routes);

let port = 8000;

app.listen(port, function(){
    console.log("application listening on port", port);
})  