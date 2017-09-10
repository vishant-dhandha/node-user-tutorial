/**
 * Created by PhpStorm.
 * User: vishant
 * Date: 9/9/17
 * Time: 2:17 PM
 */

/** DATABASE CONFIGURATION
 * Add your keys to the `.env` file
 * mongo_username
 * mongo_password
 * mongo_host
 * mongo_port
 * mongo_database
 * mongo_database_admin
 * mongo_auth_mechanism
 */
var path = require("path");
require("dotenv").config(path.join(__dirname, "/../.env"));

module.exports = {
	mongo: "mongodb://" + process.env.MONGO_USERNAME + ":" + process.env.MONGO_PASSWORD + "@" + process.env.MONGO_HOST + ":" + process.env.MONGO_PORT + "/" + process.env.MONGO_DATABASE
};
