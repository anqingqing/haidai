var express = require("express");
var app = express();
var router = require("./route.js");
var bodyParser = require("body-parser");

// node要做post请求，参数的读取需要引入一个第三方插件 body-parser


app.use(bodyParser.urlencoded({
	extended: true
}))

app.use("/", router);

app.listen(3000, function() {
	console.log("服务器运行在3000端口上")
})