/*
	链接数据库
*/

var config = require("./config.js");
var ConnClient = {
	Client: require("mysql").createConnection(config)
}

module.exports = ConnClient;