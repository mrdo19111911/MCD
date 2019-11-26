'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('./index');

var _token = require('./token');

var _token2 = _interopRequireDefault(_token);

var _config = require('../../config');

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require('../../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [
// signup
{
    method: 'POST',
    path: '/api/v1/user/signup',
    config: {
        auth: false
    },
    handler: async function handler(request, h) {

        return await (0, _index.accountSignup)(request, h);
    }
    // chưa tạo schema vadilate
},
//login
{
    method: "POST",
    path: '/api/v1/user/login',
    handler: async function handler(request, h) {
        var cookie_options = {
            ttl: 365 * 24 * 60 * 60 * 1000, // expires a year from today
            encoding: 'none', // we already used JWT to encode
            isSecure: false, // warm & fuzzy feelings
            isHttpOnly: false, // prevent client alteration
            clearInvalid: false, // remove invalid cookies
            strictHeader: true // don't allow violations of RFC 6265
        };
        return h.response({ token: (0, _token2.default)(request.pre.user), data: request.pre.user, statusCode: '201' }).state("token", (0, _token2.default)(request.pre.user), cookie_options);
    },
    options: {
        pre: [{ method: _index.accountLogin, assign: 'user' }],
        auth: {
            mode: 'try'
        }
        // validate: {
        //     payload: authenticateUserSchema
        // }
    }
},
// login fb 
{
    method: 'GET',
    path: '/api/v1/loginfacebook',
    options: {
        auth: {
            strategy: 'facebook',
            mode: 'try'
        },
        pre: [{ method: _index.facebookLogin, assign: 'fb' }]
    },
    handler: async function handler(request, h) {
        var cookie_options = {
            ttl: 365 * 24 * 60 * 60 * 1000, // expires a year from today
            encoding: 'none', // we already used JWT to encode
            isSecure: false, // warm & fuzzy feelings
            isHttpOnly: false, // prevent client alteration
            clearInvalid: false, // remove invalid cookies
            strictHeader: true // don't allow violations of RFC 6265
        };
        return h.response({ token: (0, _token2.default)(request.pre.fb), data: request.pre.fb, statusCode: '201' }).state("token", (0, _token2.default)(request.pre.fb), cookie_options);
    }

},
// login google
{
    method: 'GET',
    path: '/api/v1/logingoogle',
    options: {
        auth: {
            strategy: 'google',
            mode: 'try'
        },
        pre: [{ method: _index.googleLogin, assign: 'gl' }]
    },
    handler: async function handler(request, h) {
        var cookie_options = {
            ttl: 365 * 24 * 60 * 60 * 1000, // expires a year from today
            encoding: 'none', // we already used JWT to encode
            isSecure: false, // warm & fuzzy feelings
            isHttpOnly: false, // prevent client alteration
            clearInvalid: false, // remove invalid cookies
            strictHeader: true // don't allow violations of RFC 6265
        };
        return h.response({ token: (0, _token2.default)(request.pre.gl), data: request.pre.gl, statusCode: '201' }).state("token", (0, _token2.default)(request.pre.gl), cookie_options);
    }

}];