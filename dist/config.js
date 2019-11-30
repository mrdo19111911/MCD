'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dbConfigs = exports.secretKey = undefined;

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var secretKey = exports.secretKey = _crypto2.default.randomBytes(256).toString('base64');
var dbConfigs = exports.dbConfigs = {
    uri: 'mongodb://' + (process.env.API_DB_HOST || 'localhost'),
    port: 27017,
    dbName: process.env.DB_NAME || 'danhgiathayboi',
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || '123456789'
};