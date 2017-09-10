/**
 * Created by PhpStorm.
 * User: vishant
 * Date: 9/9/17
 * Time: 3:17 PM
 */

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	fName: {
		type: String,
		required: true,
		trim: true
	},
	lName: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true
	},
	pinCode: {
		type: Number
	},
	birthDate: {
		type: Date
	},
	isActive: {
		type: Boolean
	}
});
var User = mongoose.model("User", UserSchema);

module.exports = User;
