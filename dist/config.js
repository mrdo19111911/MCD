'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secretKey = undefined;

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secretKey = exports.secretKey = _crypto2.default.randomBytes(256).toString('base64');