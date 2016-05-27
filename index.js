var express=require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});
app.use(express.static("public"));

io.on("connection", function(socket) {
	console.log("Tenemos una nueva victima!!");

	socket.on("chat", function(_msg) {
		io.emit("nuevo_mensaje", _msg);
		// console.log(_msg);
	});

});




http.listen(8080, function() {
	console.log("Express run on port 8080");
});