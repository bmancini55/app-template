
// module dependencies
var express = require('express'),

// local variables
    app = express();


// open access to client files 
app.use('/client', express.static(__dirname + '/client'));

// basic route
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});


// listen on the mofo port
app.listen(8080);