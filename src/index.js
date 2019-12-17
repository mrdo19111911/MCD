import Hapi from '@hapi/hapi';
import mongoose from 'mongoose';
import Bell from '@hapi/bell';
import * as hapiJWT from 'hapi-auth-jwt2';
import { routeList } from './route.list';
import { secretKey, dbConfigs } from './config';
import { verifyUser } from './api/user/verifyUser';
import Account from './models/user.model';
const getDate = {
    name: 'getDate',
    version: '1.0.0',
    register: async function(server, options) {
        const currentDate = function() {
            return new Date();
        };
        server.decorate('toolkit', 'getDate', currentDate);
    }
}
const dbOptions = {
    user: dbConfigs.username,
    pass: dbConfigs.password,
    dbName: dbConfigs.dbName,
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
const init = async() => {
    const server = Hapi.server({
        port: 3000,
        host: "localhost",
    });
    // 
    // Load plugin
    await server.register({
        plugin: getDate,
        options: { format: 'DD/MM/YYYY' }
    });

    await server.register(Bell);
    await server.register(hapiJWT.default);

    server.auth.strategy('jwt', 'jwt', {
        key: secretKey,
        verifyOptions: { algorithms: ['HS256'], ignoreExpiration: false },
        validate: async function({ id, username, email, iat, exp }, h) {

            return { isValid: await verifyUser(id) };
        }
    })
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
        handler: async(request, h) => {

            return h.response("heLLo");
        }
    });
    routeList.map(route => {
        server.route(route)
    })
    await server.start();
    // await mongoose.connect("mongodb://localhost:27017/account").then(
    //     (connection) => {
    //         console.log('Database connected!');

    //     },
    //     error => console.log('Connect database error: ', error)
    // );
    await mongoose.connect(`${dbConfigs.uri}:${dbConfigs.port}?authenticationDatatbase=admin`, dbOptions)
        .then(
            (connection) => {
                console.log('Database connected!');
                // dbConnection = connection;
            },
            error => console.log('Connect database error: ', error)
        );
    console.log('Server running on %s', server.info.uri);
}


process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();