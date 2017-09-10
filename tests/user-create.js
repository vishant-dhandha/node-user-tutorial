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
	before(function(done){
		User.remove({}, function(){
			done();
		});
	});
	/*
     * Test the /POST route
     */
	describe("/POST users", function(){
		it("it should return userId",function(done) {
			var user = {
				fName: "vishant",
				lName: "dhandha",
				email: "vishant.dhandha@gmail.com",
				pinCode: 400089,
				birthDate: "02-FEB-1992",
				isActive: true
			};
			chai.request(server)
				.post("/api/users")
				.send(user)
				.end(function(err,res) {
					should.exist(res.body);
					res.should.have.status(200);
					res.body.should.be.a("string");
					done();
				});
		});
	});

});
