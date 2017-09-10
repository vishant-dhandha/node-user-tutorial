/**
 * Created by PhpStorm.
 * User: vishant
 * Date: 10/9/17
 * Time: 11:42 AM
 */

var User = require("../app/models/user.js");

//Require the dev-dependencies
var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../index.js");
var should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe("Users", function(){
	var userId;

	before(function(done){
		var user = {
			fName: "vishant",
			lName: "dhandha",
			email: "vishant.dhandha@gmail.com",
			pinCode: 400089,
			birthDate: "02-FEB-1992",
			isActive: true
		};
		User.create(user, function(err,user){
			if (err) {
				done(err);
			} else {
				userId = user._id;
				done();
			}
		});
	});

	/*
     * Test the /PUT route
     */

	describe("/PUT update user by userId", function(){
		it("it should update user object which was provided",function(done) {
			var updateObj = {
				pinCode: 400089,
				birthDate: "10-NOV-1992",
				isActive: true
			};
			chai.request(server)
				.put("/api/users/"+userId)
				.send(updateObj)
				.end(function(err,res) {
					should.exist(res.body);
					res.should.have.status(200);
					res.body.should.be.a("object");
					done();
				});
		});
	});
});
