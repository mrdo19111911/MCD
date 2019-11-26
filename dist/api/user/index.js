'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.accountSignup = accountSignup;
exports.accountLogin = accountLogin;
exports.facebookLogin = facebookLogin;
exports.googleLogin = googleLogin;

var _user = require('../../models/user.model');

var _user2 = _interopRequireDefault(_user);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function accountSignup(request, h) {
    var account = await _user2.default.findOne({
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
            var data = await _user2.default.create({
                local: {
                    email: request.payload.email,
                    password: hash
                },
                username: request.payload.username
            });
            if (data) {
                return h.response({
                    user: {
                        id: data._id,
                        username: data.username,
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
    var user = await _user2.default.findOne({ 'local.email': request.payload.email });
    if (user) {
        var isValid = _bcryptjs2.default.compareSync(request.payload.password, user.local.password);
        if (!isValid) {
            return h.response(Boom.unauthorized('Invalid Password'));
        } else {
            return h.response({
                id: user._id,
                username: user.username,
                email: user.email
            });
        }
    } else {
        return h.response(Boom.unauthorized('Incorrect username or email'));
    }
}

async function facebookLogin(request, h) {
    if (!request.auth.isAuthenticated) {
        return 'Authentication failed due to: ' + request.auth.error.message;
    } else {

        var data = await _user2.default.findOne({
            "facebook.email": request.auth.credentials.profile.raw.email
        });

        if (data) {
            return h.response({
                id: data._id,
                username: data.facebook.name,
                picture: data.facebook.picture
            });
        } else {
            var _data = await _user2.default.create({
                facebook: {
                    token: request.auth.credentials.token,
                    name: request.auth.credentials.profile.raw.name,
                    email: request.auth.credentials.profile.raw.email,
                    picture: {
                        height: request.auth.credentials.profile.raw.picture.data.height,
                        width: request.auth.credentials.profile.raw.picture.data.width,
                        url: request.auth.credentials.profile.raw.picture.data.url
                    }
                }

            });
            return h.response({
                id: _data._id,
                username: _data.facebook.name,
                picture: _data.facebook.picture
            });
        }
    }
}

async function googleLogin(request, h) {
    if (!request.auth.isAuthenticated) {
        return 'Authentication failed due to: ' + request.auth.error.message;
    } else {
        var data = await _user2.default.findOne({
            "google.email": request.auth.credentials.profile.raw.email
        });

        if (data) {

            return h.response({
                id: data._id,
                username: data.google.name,
                picture: data.google.picture
            });
        } else {

            var _data2 = await _user2.default.create({
                google: {

                    name: request.auth.credentials.profile.raw.name,
                    email: request.auth.credentials.profile.raw.email,
                    picture: request.auth.credentials.profile.raw.picture
                }

            });
            return h.response({
                id: _data2._id,
                username: _data2.google.name,
                picture: _data2.google.picture
            });
        }
    }
}