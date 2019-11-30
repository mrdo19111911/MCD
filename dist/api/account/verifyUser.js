'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.verifyUser = verifyUser;

var _boom = require('@hapi/boom');

var _boom2 = _interopRequireDefault(_boom);

var _account = require('../../models/account.model');

var _account2 = _interopRequireDefault(_account);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function verifyUser(id) {
    var account = await _account2.default.findOne({ _id: id });
    return !!account;
}