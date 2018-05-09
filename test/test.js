"use strict";
let chai        = require('chai');
var expect      = require('chai').expect;

//Require the dev-dependencies
let chaiHttp    = require('chai-http');
let should      = chai.should();
chai.use(chaiHttp);

var API_SERVER = chai.request('localhost:4000');

describe('/GET /message', () => {
    it('it should get greeting message from server', (done) => {
      API_SERVER
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
    });

    it('it should login', (done) => {
      API_SERVER
      .post('/login')
      .send({emailID : 'sunderman.tamang@gmail.com', password : '123'})
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.property("status")
        expect(res.body.status).to.equal("error")
        expect(res.body).to.have.property("message")
        expect(res.body.message).to.equal("Invalid username or password.")
        console.log("Hi_!");
        done();
      });
    });
  });