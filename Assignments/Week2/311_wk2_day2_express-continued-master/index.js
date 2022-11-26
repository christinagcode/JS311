const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;

app.use(express.static("public"));

app.use(bodyParser.json());

let contactsRouter = require("./routes/contacts");
let vehiclesRouter = require("./routes/vehicles");
let commentsRouter = require("./routes/comments");
let productsRouter = require("./routes/products");

app.use(contactsRouter);
app.use(vehiclesRouter);
app.use(commentsRouter);
app.use(productsRouter);



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});