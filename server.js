var express = require('express')
	bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500).json(err);
});

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static('./'));

app.listen(port, function() { console.log("Static content server running on port " + port);  });