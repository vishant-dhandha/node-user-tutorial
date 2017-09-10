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
	}
};
