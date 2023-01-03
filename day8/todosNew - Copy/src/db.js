let mysql = require("mysql");

let connection = mysql.createConnection({
    "host":"database-1.cktw4eiodrjr.us-east-2.rds.amazonaws.com",
    "user":"admin",
    "password": "pockyisgreat123",
    "database": "db1",
    "port":3306
})
// common pattern for node
// this his how you send a query to your db
connection.query("select now()", function(err, results){
    // what to do when the query finishes executing

    if(err){
        console.log("Connection to database failed");
    } else {
        console.log("Connection to database passed", results);
    }
});

module.exports = connection;