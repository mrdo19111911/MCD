'use strict';

var _hapi = require('@hapi/hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bell = require('@hapi/bell');

var _bell2 = _interopRequireDefault(_bell);

var _hapiAuthJwt = require('hapi-auth-jwt2');

var hapiJWT = _interopRequireWildcard(_hapiAuthJwt);

var _route = require('./route.list');

var _config = require('./config');

var _verifyUser = require('./api/user/verifyUser');

var _user = require('./models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDate = {
    name: 'getDate',
    version: '1.0.0',
    register: async function register(server, options) {
        var currentDate = function currentDate() {
            return new Date();
        };
        server.decorate('toolkit', 'getDate', currentDate);
    }
};

var init = async function init() {
    var server = _hapi2.default.server({
        port: 3000,
        host: "localhost"
    });
    // 
    // Load plugin
    await server.register({
        plugin: getDate,
        options: { format: 'DD/MM/YYYY' }
    });

    await server.register(_bell2.default);
    await server.register(hapiJWT.default);

    server.auth.strategy('jwt', 'jwt', {
        key: _config.secretKey,
        verifyOptions: { algorithms: ['HS256'], ignoreExpiration: false },
        validate: async function validate(_ref, h) {
            var id = _ref.id,
                username = _ref.username,
                email = _ref.email,
                iat = _ref.iat,
                exp = _ref.exp;


            return { isValid: await (0, _verifyUser.verifyUser)(id) };
        }
    });
    server.auth.default('jwt');

    server.auth.strategy('facebook', 'bell', {
        provider: 'facebook',
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '2584608201607482',
        clientSecret: '5a0197a1549af47016a5f9a8259e6f4b',
        location: server.info.uri
    });
    server.auth.strategy('google', 'bell', {
        provider: 'google',
        password: 'cookie_encryption_password_secure',
        isSecure: false,
        clientId: '836415783677-31cpp5f7lh8o5l5gd5d3uqs97pgohbki.apps.googleusercontent.com',
        clientSecret: 'bM-uBTIonnkcauxalEu7QSiD',
        location: server.info.uri
    });

    server.route({
        method: 'GET',
        path: '/',
        config: {
            auth: false
        },
        handler: async function handler(request, h) {

            return h.response("heLLo");
        }
    });
    _route.routeList.map(function (route) {
        server.route(route);
    });
    await server.start();
    await _mongoose2.default.connect("mongodb://localhost:27017/account", function () {
        return console.log('Okay!');
    });
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', function (err) {

    console.log(err);
    process.exit(1);
});

init();