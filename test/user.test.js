/**
 * Created by CoderDream on 2017/6/15.
 */
// 引用模型
var User = require('../model').User;
var UserCheckin = require('../model').UserCheckin;
var UserAddress = require('../model').UserAddress;
var Role = require('../model').Role;

var expect = require('chai').expect;

/*
 describe('测试同时向两张独立的表添加记录', function () {
 var result = "";
 beforeEach(function (done) {
 Promise.all([
 User.create({username: 'itbilu', password: 'itbilu.com'}),
 Role.create({roleName: '管理员'})
 ]).then(function (data) {
 result = data;
 done();
 });
 });

 it('检查User和Role', function () {
 var user = result[0].dataValues;
 console.log(user.id + "\t" + user.username + "\t" + user.password + "\t" + user.active);
 expect(user.username).to.be.equal("itbilu");
 expect(user.password).to.be.equal("itbilu.com");
 expect(user.active).to.be.equal(true);

 var role = result[1].dataValues;
 console.log(role.id + "\t" + role.roleName);
 expect(role.roleName).to.be.equal("管理员");
 });
 });



 // 向 UserCheckin 插入数据
 describe('测试同时向两张关联表添加记录', function () {
 var userResult = "";
 var userCheckinResult = "";
 beforeEach(function (done) {
 User.create({username: 'itbilu', password: 'itbilu.com'}).then(function (user) {
 var userCheckin = UserCheckin.build({loginIp: '127.0.0.1'});
 user.setUserCheckin(userCheckin);
 userResult = user;
 userCheckinResult = userCheckin;
 done();
 });
 });

 it('检查User和UserCheckin', function () {
 console.log(userResult.id + "\t" + userResult.username + "\t" + userResult.password + "\t" + userResult.active);
 expect(userResult.username).to.be.equal("itbilu");
 expect(userResult.password).to.be.equal("itbilu.com");
 expect(userResult.active).to.be.equal(true);

 console.log(userCheckinResult.id + "\t" + userCheckinResult.user_id + "\t" + userCheckinResult.loginIp);
 expect(userCheckinResult.loginIp).to.be.equal("127.0.0.1");
 });
 });



// N:M 插入数据
describe('测试同时向两张关联表添加记录', function () {
  var resultUser = "";
  var resultRole = "";
  var resultUserRoles = "";
  beforeEach(function (done) {
    Promise.all([
      User.create({username: 'itbilu', password: 'itbilu.com'}),
      Role.create({roleName: '管理员'})
    ]).then(function (results) {
      var user = results[0];
      var role = results[1];
      var userRoles = user.setUserRoles(role);
      console.log("userRoles\t" + userRoles);
      resultUser = user;
      resultRole = role;
      //resultUserRoles = userRoles
      //results[0].setUserRoles(results[1]);
      // 或
      //role.setUserRoles(user);
      done();
    });
  });


  it('检查User和Role', function () {
    console.log("resultUser Info\t" + resultUser.id + "\t" + resultUser.username + "\t" + resultUser.password + "\t" + resultUser.active);
    expect(resultUser.username).to.be.equal("itbilu");
    expect(resultUser.password).to.be.equal("itbilu.com");
    expect(resultUser.active).to.be.equal(true);

    console.log("resultRole Info\t" + resultRole.id + "\t" + resultRole.roleName);
    expect(resultRole.roleName).to.be.equal("管理员");
  });


});



 // 查询User及UserCheckin
 describe('测试同时向两张关联表添加记录', function () {
 var resultUser = "";
 var resultUserCheckin = "";
 beforeEach(function (done) {
 User.findOne({include: [UserCheckin]}).then(function (user) {
 console.log("user\t" + user);
 resultUser = user;
 resultUserCheckin = user.UserCheckin;
 //resultUserRoles = userRoles
 //results[0].setUserRoles(results[1]);
 // 或
 //role.setUserRoles(user);
 done();
 });
 });


 it('检查User和Role', function () {
 console.log("resultUser Info:\t" + resultUser.id + "\t" + resultUser.username + "\t" + resultUser.password + "\t" + resultUser.active);
 expect(resultUser.username).to.be.equal("itbilu");
 expect(resultUser.password).to.be.equal("itbilu.com");
 expect(resultUser.active).to.be.equal(true);

 console.log("resultUserCheckin Info:\t" + resultUserCheckin.id + "\t" + resultUserCheckin.user_id + "\t" + resultUserCheckin.loginIp);
 expect(resultUserCheckin.loginIp).to.be.equal("127.0.0.1");
 });

 });


 */



  // 查询User及UserCheckin
  describe('测试同时向两张关联表添加记录', function () {
    var resultUser = "";
    var resultUserRoles = "";
    beforeEach(function (done) {
      User.findOne({id:4}).then(function (user) {
        console.log("user\t" + user);
        resultUser = user;
        var temp = user.getUserRoles();
        temp.then(
          function (userRoles) {
            resultUserRoles = userRoles;
            console.log("#####" + userRoles);
            console.log("#####" + userRoles.role_id);
            done();
          }
        );

        //resultUserRoles = userRoles;
        //resultUserRoles = userRoles
        //results[0].setUserRoles(results[1]);
        // 或
        //role.setUserRoles(user);

      });
    });


    it('检查User和Role', function () {
      console.log("resultUser Info:\t" + resultUser.id + "\t" + resultUser.username + "\t" + resultUser.password + "\t" + resultUser.active);
      expect(resultUser.username).to.be.equal("itbilu");
      expect(resultUser.password).to.be.equal("itbilu.com");
      expect(resultUser.active).to.be.equal(true);

      console.log("resultUserRoles Info:\t" + resultUserRoles.role_id + "\t" + resultUserRoles.user_id);
      //expect(resultUserCheckin.loginIp).to.be.equal("127.0.0.1");
    });

  });
