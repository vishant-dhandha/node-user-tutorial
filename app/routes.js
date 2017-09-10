/**
 * Created by PhpStorm.
 * User: vishant
 * Date: 9/9/17
 * Time: 3:03 PM
 */

var User = require("./models/user");
var moment = require("moment");
var validate = require("express-validation");
var validateCreate = require("./validators/user/create.js");
var validateFind = require("./validators/user/find.js");
var validateUpdate = require("./validators/user/update.js");
module.exports = function (app) {
	/***
     * apis starts from here
     * */

	/**
     * Get details of an existing User, based on given UserId
     *
     * @param {String} userId of which we want details.
     * @returns {Object} response The response contain User object/ Error .
     */
	app.get("/api/users/:userId", validate(validateFind),function (req, res) {
		var params = req.params;
		User.findById(params.userId, function (err, user) {
			if (err) {
				res.send(err);
			} else {
				res.send(user);
			}
		});
	});

	/**
     * create user and send back all users after creation
     *
     * @param {Object} user details to create .
     * @returns {Object} response The response contain User object/ Error .
     */
	app.post("/api/users", validate(validateCreate),function (req, res) {
		var params = req.body;
		// create a user, information comes from AJAX request.
		var data = {
			fName: params.fName,
			lName: params.lName,
			email: params.email,
			pinCode: params.pinCode,
			birthDate:  moment(params.birthDate, "DD-MMM-YYYY").utcOffset(0, true).format(),
			isActive: params.isActive
		};
		User.create(data, function (err, user) {
			if (err) {
				res.send(err);
			} else {
				res.send(user._id);
			}
		});
	});

	/**
     * Update an existing User, based on given userId
     *
     * @param {String} userId of which we want to update.
     * @param {Object} user details which we want to update .
     * @returns {Object} response The response contain User object/ Error .
     */
	app.put("/api/users/:userId",validate(validateUpdate), function (req, res) {
		var params = req.params;
		var updateObj = req.body;
		User.findById(params.userId, function (err, user) {
			if (err) {
				return res.send(err);
			} else if (!user) {
				return res.send(new Error("Could not find that user!"));
			} else {
				// do your updates here
				for (var key in updateObj) {
					if(key == "birthDate"){ // remove timezone offset if provided with date.
						user[key] = moment(updateObj[key], "DD-MMM-YYYY").utcOffset(0, true).format();
					}else{
						user[key] = updateObj[key];
					}
				}
				user.save(function (err, user) {
					if (err) {
						res.send(err);
					} else {
						res.send(user);
					}
				});
			}
		});
	});

	/***
     * apis ends here
     * */
};
