/**
 * Created by PhpStorm.
 * User: vishant
 * Date: 9/9/17
 * Time: 1:52 PM
 */

var Joi = require("joi");
module.exports = {
	headers: {
		authorization: Joi.string()
	},
	params: {
		fName: Joi.string().min(3).max(30),
		lName: Joi.string().min(3).max(30),
		email :Joi.string().email(),
		pinCode :Joi.number(),
		birthDate :Joi.string(),
		isActive :Joi.boolean()
	}
};
