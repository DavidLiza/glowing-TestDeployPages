
// npm i -s cors 
// npm i -s express 
// npm i -s axios 

var cors        = require("cors");
var http        = require("http");
var express     = require("express");

var urlRoutes   = require('./routes/greetRoute');
var config      = require("./config/config.json")[process.env.NODE_ENV || 'development'];

// --- VARIABLES ---
var app         = express();
var router      = express.Router();

router.use(function (req, res, next) {
    next();
});

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/", urlRoutes);

app.get('/test', function (req, res) {
  return res.status(200).json({
    code: 'YUJUUUUUUUU',
    message: 'Test Good'
  });
})

var port    = config.server.http.port;

// ***** HTTP SERVER *****
var httpServer = http.createServer(app).listen(port, function () {
    console.log( "HTTP listen port " + port);
});

// ***** ERROR CATCH *****
process.on("uncaughtException", function (err) {
    console.error("ERROR RPA: " + err);
});

app.on("error", function (err) {
    console.error("GEN ERROR : " + err);
});

exports = app;
