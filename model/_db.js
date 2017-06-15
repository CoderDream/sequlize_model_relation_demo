'use strict';

var Sequelize = require('sequelize');

exports.sequelize = function () {
	return new Sequelize('modelTest', 'root', '1234', {host: 'localhost', port:3306, logging:console.log});
}
