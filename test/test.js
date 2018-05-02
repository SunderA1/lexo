"use strict";
let chai        = require('chai');
var expect      = require('chai').expect;

//Require the dev-dependencies
let chaiHttp    = require('chai-http');
let should      = chai.should();
chai.use(chaiHttp);

var API_SERVER = chai.request('localhost:4000');

describe('/POST login', () => {
    it('it should login', (done) => {
      API_SERVER
      .post('/login')
      .send({emailId : 'sunderman.tamang@gmail.com', password : 'welcome'})
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
    });
  });