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
	body: {
		fName: Joi.string().min(3).max(30).required(),
		lName: Joi.string().min(3).max(30).required(),
		email :Joi.string().email().required(),
		pinCode :Joi.number(),
		birthDate :Joi.string(),
		isActive :Joi.boolean()
	}
};
