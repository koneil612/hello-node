const express = require('express');
const bodyParser = require('body-Parser');
const app = express();


app.use(bodyParser.json());
app.use(express.static("public"));
app.set('view engine', 'hbs');




app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
