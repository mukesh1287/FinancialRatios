let express = require('express');
let app = express();
let fs = require("fs");
let mongoose = require('mongoose');




let bodyParser = require('body-parser');
// Import Mongoose

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

let apiRoutes = require("./api/routes/routes");
app.use('/api', apiRoutes);

var db = mongoose.connect('mongodb://localhost/dbname', function(error){
    if(error) console.log(error);

        console.log("connection successful");
});

var port = process.env.PORT || 8081;
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

