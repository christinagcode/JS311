    console.log("hellooo??");

let express = require("express");

let app = express();

app.use(express.json());

let PORT = 4100;

// app.get("/", function(req,res){
//     res.status(200).json("hellooo");
// })

app.get("/add", function(req,res){
    let {numberOne, numberTwo} = req.query;
    let addAnswer = numberOne + "+" + numberTwo;
   console.log(addAnswer);
    const addResult = (x, y) => {
        let sum = Number(x) + Number(y);

        return sum;
    }
    const total = addResult(numberOne, numberTwo);
       res.json(total);
})

app.post("/multiply", function(req,res){
    let {numberOne, numberTwo} = req.body;
    const multiTwo = numberOne * numberTwo;
    res.json(multiTwo);
})

app.put("/modulus", function(req,res){
    let {numberOne, numberTwo} = req.body;
    let sum = numberOne % numberTwo;
    res.json(sum);
})

app.listen(PORT, function(){
    console.log("Application started on PORT", PORT);
})