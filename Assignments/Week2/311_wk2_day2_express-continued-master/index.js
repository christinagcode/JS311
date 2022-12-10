const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
const port = process.env.PORT || 4001;

let contactsRouter = require("./routes/contacts");
let vehiclesRouter = require("./routes/vehicles");
let commentsRouter = require("./routes/comments");
let productsRouter = require("./routes/products");

app.use('/contacts', contactsRouter);
app.use('/vehicles', vehiclesRouter);
app.use('/comments', commentsRouter);
app.use('/products', productsRouter);



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});