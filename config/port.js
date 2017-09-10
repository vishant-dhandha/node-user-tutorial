/**
 * Created by PhpStorm.
 * User: vishant
 * Date: 9/9/17
 * Time: 2:18 PM
 */

/** PORT CONFIGURATION
 * Add your keys to the `.env` file
 * available_port
 */
var path = require("path");
require("dotenv").config(path.join(__dirname, "/../.env"));

module.exports = {
	port: {
		availablePort: process.env.AVAILABLE_PORT
	}
};
