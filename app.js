const express = require('express');
const bodyParser = require('body-Parser');
const app = express();


app.use(bodyParser.json());
app.use(express.static("public"));
app.set('view engine', 'hbs');




app.get('/', function(req, res) {
    // res.send('Hello World!');
    var data = {
    title: "Hello There",
    name: "kristine"
    };
    res.render("hello.hbs", data);

});

app.get('/hellojson', function(req, res) {
    res.json(
        {"message": "Hello World!"}
        );
});

// Express 101 Exercises **********
// app.get('/year', function(req, res) {
//     var age = req.query.age;
//     res.send("You were born in " + (2017- age) + "!");
// });

app.get("/name/:name/age/:age", function(req, res) {
    var name = req.params.name;
    var age =  req.params.age;
    res.send("Hello " + name + "! " + "You were born in " + (2017- age) + "!");
});




// app.get("/hello/:name", function(req, res) {
//     var name = req.params.name || 'world';
//     res.send("Hello " + name + "!");
// });

// This is to pull from a query string *********
// app.get("/hello", function(req, res) {
//     var name = req.query.name || 'world';
//     console.log(req);
//     res.send("Hello " + name + "!");
// });


app.post('/hello', function(req, res) {
    var name = req.body.name || "world";
    res.send("Hello " + name + "!");
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
