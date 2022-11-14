//bringing the express framework
let express = require("express");

// instantiates an application
let app = express();

// easy to forget this line but you need this if you want to handle requets payload
// in json format
app.use(express.json())

// this is just a variable holding a number 
let PORT = 8000;

// we are specifying that this application should respond
// to a get request on the /hello route
// by sending back the string "hello"
app.get("/hello", function(req, res)   {
    // res.send("hello"); // this will send back the string "hello" on the response

    let query = req.query;
    let greeting = "hello";
    if(query.name){
        greeting = "hello there "+query.name;
    }
    console.log("Query: ", query);

    res.send(greeting);
})

// lets add a /bye route, that responds on the post verb
app.post("/bye", function(req,res){
    let payload = req.body;

    console.log("Request body = ", payload);
    res.send("later gator"); //  later gator this request is made 
})

app.get("/bye", function(req,res){
    res.send("After a while crocodile");
})

//we want t code up a route, taht returns the english spell of number
// /number1 -> one
// /number/2 -> two
// /number/3 -> three
// /number/4 -> fourkiju
// /number/5 -> five
// /number/6 -> five
// /number/6019394 -> six million ninteen thousand three hundred and eight four

app.get("/number/:n", function (res, req){
    let input = req.params.n;

    // write some fancy code of convert the numberic to an english spelling 
    let english;
    if(input ==1){
        english = "one";
    } else if (input ==2){
        english = "two";
    } else if (input ==3){
        english = "three";
    };

})

app.listen(PORT, function(){
    console.log("application started on port", PORT);
})
// res.send()
// res.json()
// res.sendStatus()
// res.status()


// Homework;

// create an application that has the following routes

// GET /add, this route should take in 2 numbers a query parameters, and return the sum
// add?num1=6&num2=17 -> 23

// POST /multiply, this route should take in a requres body that contains 2 numbers and return product
// //multiply -> 24
// {
//     "num1": 2,
//     "num2": 12
// }

// PUT /reciprocal. this route should take in a single number as a path parameter and return the reciprocal
// /reciprocal/4 -> .25