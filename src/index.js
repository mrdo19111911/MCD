const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
import dotenv from 'dotenv';
dotenv.config();
import Bell from '@hapi/bell';
import { routeList } from './route.list';
import { dbConfigs } from './config';
import { secretKey } from './config';
import { verifyUser } from './api/account/verifyUser';
import * as hapiJWT from 'hapi-auth-jwt2';
let dbConnection = null;

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
console.log(dbConfigs);
const init = async() => {

    const server = Hapi.server({
        port: process.env.PORT || 3001,
        host: process.env.HOST
    });
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

    server.route({
        method: 'GET',
        path: '/',
        handler: async(request, h) => {

            return h.response("hLLo");
        }
    });

    routeList.map(route => {
        server.route(route)
    })
    await server.start();
    await mongoose.connect(process.env.DB_LOCALHOST, () => console.log('Okay!'))
        // await mongoose.connect(`${dbConfigs.uri}:${dbConfigs.port}?authenticationDatatbase=admin`, dbOptions)
        //     .then(
        //         (connection) => {
        //             console.log('Database connected!');
        //             dbConnection = connection;
        //         },
        //         error => console.log('Connect database error: ', error)
        //     );
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();