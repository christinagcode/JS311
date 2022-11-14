let express = require("express");
let PORT = 2000;

let app = express();

app.get("/hi", function(req, res){
    console.log("GET /hi");

    let reply = {};
    reply.message = "Hope you are well! ʕ•́ᴥ•̀ʔっ♡  ";
    reply.time = new Date();
    
    res.json(reply);
});

app.listen(PORT, function(res, req){
    console.log("Hello World!", PORT);
})