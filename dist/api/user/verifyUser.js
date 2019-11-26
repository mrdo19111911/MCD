'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyUser = verifyUser;

var _boom = require('@hapi/boom');

var _boom2 = _interopRequireDefault(_boom);

var _user = require('../../models/user.model');

var _user2 = _interopRequireDefault(_user);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function verifyUser(id) {
    var account = await _user2.default.findOne({ _id: id });
    return !!account;
}