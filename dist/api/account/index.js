'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.accountSignup = accountSignup;
exports.accountLogin = accountLogin;

var _account = require('../../models/account.model');

var _account2 = _interopRequireDefault(_account);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _boom = require('@hapi/boom');

var _boom2 = _interopRequireDefault(_boom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function accountSignup(request, h) {
    var account = await _account2.default.findOne({
        "local.email": request.payload.email
    });
    if (account) {
        if (account.local.email == request.payload.email) {
            return h.response({
                statusCode: 400,
                error: "Bad data",
                message: "Email already exits"
            });
        }
    } else {
        var salt = _bcryptjs2.default.genSaltSync();
        var hash = _bcryptjs2.default.hashSync(request.payload.password, salt);
        try {
            var data = await _account2.default.create({
                local: {
                    name: request.payload.name,
                    email: request.payload.email,
                    password: hash
                },
                username: request.payload.username
            });
            if (data) {
                return h.response({
                    user: {
                        id: data._id,
                        name: data.local.name,
                        email: data.local.email
                    }
                }).code(201);
            }
        } catch (error) {
            return h.response({
                statusCode: 500,
                error: error,
                message: 'An internal server error occurred'
            }).code(500);
        }
    }
}

async function accountLogin(request, h) {
    var user = await _account2.default.findOne({ 'local.email': request.payload.email });
    if (user) {
        var isValid = _bcryptjs2.default.compareSync(request.payload.password, user.local.password);
        if (!isValid) {
            return _boom2.default.unauthorized('Invalid Password');
        } else {
            console.log(user);
            return {
                id: user._id,
                username: user.local.name.fullname,
                email: user.local.email
            };
        }
    } else {
        return _boom2.default.unauthorized('Incorrect username or email');
    }
}