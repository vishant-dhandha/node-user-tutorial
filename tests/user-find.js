/**
 * Created by PhpStorm.
 * User: vishant
 * Date: 10/9/17
 * Time: 11:41 AM
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
	var userId="";

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
     * Test the /GET route
     */
	describe("/GET user by userId", function(){
		it("it should return user object provided userId",function(done) {

			chai.request(server)
				.get("/api/users/"+userId)
				.end(function(err,res) {
					should.exist(res.body);
					res.should.have.status(200);
					res.body.should.be.a("object");
					res.body.should.have.property("fName");
					res.body.should.have.property("lName");
					res.body.should.have.property("email");
					res.body.should.have.property("pinCode");
					res.body.should.have.property("birthDate");
					res.body.should.have.property("isActive");
					res.body.should.have.property("_id").eql(userId.toString());
					done();
				});
		});
	});
});
