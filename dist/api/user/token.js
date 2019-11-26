'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createToken = function createToken(user) {

    return _jsonwebtoken2.default.sign({ id: user.id, username: user.username, email: user.email }, _config.secretKey, { algorithm: 'HS256', expiresIn: 60 * 3 });
};

exports.default = createToken;