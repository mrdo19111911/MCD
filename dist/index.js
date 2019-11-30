'use strict';

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _bell = require('@hapi/bell');

var _bell2 = _interopRequireDefault(_bell);

var _route = require('./route.list');

var _config = require('./config');

var _verifyUser = require('./api/account/verifyUser');

var _hapiAuthJwt = require('hapi-auth-jwt2');

var hapiJWT = _interopRequireWildcard(_hapiAuthJwt);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hapi = require('@hapi/hapi');
var mongoose = require('mongoose');

_dotenv2.default.config();

var dbConnection = null;

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
var dbOptions = {
    user: _config.dbConfigs.username,
    pass: _config.dbConfigs.password,
    dbName: _config.dbConfigs.dbName,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: true,
    reconnectTries: 10,
    reconnectInterval: 2000,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 10000,
    family: 4,
    useUnifiedTopology: true
};
console.log(_config.dbConfigs);
var init = async function init() {

    var server = Hapi.server({
        port: process.env.PORT || 3001,
        host: process.env.HOST
    });
    await server.register({
        plugin: getDate,
        options: { format: 'DD/MM/YYYY' }
    });
    await server.register(require('inert'));
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

    server.route({
        method: 'GET',
        path: '/',
        handler: async function handler(request, h) {

            return h.response("hLLo");
        }
    });

    _route.routeList.map(function (route) {
        server.route(route);
    });
    await server.start();
    // await mongoose.connect(process.env.DB_LOCALHOST, () => console.log('Okay!'))
    await mongoose.connect(_config.dbConfigs.uri + ':' + _config.dbConfigs.port + '?authenticationDatatbase=admin', dbOptions).then(function (connection) {
        console.log('Database connected!');
    }, function (error) {
        return console.log('Connect database error: ', error);
    });
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', function (err) {

    console.log(err);
    process.exit(1);
});

init();