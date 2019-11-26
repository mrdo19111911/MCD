import { accountSignup, accountLogin, facebookLogin, googleLogin } from './index';
import createToken from './token';
import { secretKey } from '../../config';
import JWT from 'jsonwebtoken';
import Account from '../../models/user.model';
export default [
    // signup
    {
        method: 'POST',
        path: '/api/v1/user/signup',
        config: {
            auth: false
        },
        handler: async(request, h) => {

                return await accountSignup(request, h)
            }
            // chưa tạo schema vadilate
    },
    //login
    {
        method: "POST",
        path: '/api/v1/user/login',
        handler: async(request, h) => {
            var cookie_options = {
                ttl: 365 * 24 * 60 * 60 * 1000, // expires a year from today
                encoding: 'none', // we already used JWT to encode
                isSecure: false, // warm & fuzzy feelings
                isHttpOnly: false, // prevent client alteration
                clearInvalid: false, // remove invalid cookies
                strictHeader: true // don't allow violations of RFC 6265
            };
            return h.response({ token: createToken(request.pre.user), data: request.pre.user, statusCode: '201' })
                .state("token", createToken(request.pre.user), cookie_options);
        },
        options: {
            pre: [{ method: accountLogin, assign: 'user' }],
            auth: {
                mode: 'try'
            },
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
            pre: [{ method: facebookLogin, assign: 'fb' }]
        },
        handler: async function(request, h) {
            var cookie_options = {
                ttl: 365 * 24 * 60 * 60 * 1000, // expires a year from today
                encoding: 'none', // we already used JWT to encode
                isSecure: false, // warm & fuzzy feelings
                isHttpOnly: false, // prevent client alteration
                clearInvalid: false, // remove invalid cookies
                strictHeader: true // don't allow violations of RFC 6265
            };
            return h.response({ token: createToken(request.pre.fb), data: request.pre.fb, statusCode: '201' })
                .state("token", createToken(request.pre.fb), cookie_options);

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
            pre: [{ method: googleLogin, assign: 'gl' }]
        },
        handler: async function(request, h) {
            var cookie_options = {
                ttl: 365 * 24 * 60 * 60 * 1000, // expires a year from today
                encoding: 'none', // we already used JWT to encode
                isSecure: false, // warm & fuzzy feelings
                isHttpOnly: false, // prevent client alteration
                clearInvalid: false, // remove invalid cookies
                strictHeader: true // don't allow violations of RFC 6265
            };
            return h.response({ token: createToken(request.pre.gl), data: request.pre.gl, statusCode: '201' })
                .state("token", createToken(request.pre.gl), cookie_options);

        }

    }
]