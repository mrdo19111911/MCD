import Account from '../../models/user.model';
import Bcrypt from 'bcryptjs';
import Boom from '@hapi/boom';
export async function accountSignup(request, h) {
    const account = await Account.findOne({
        "local.email": request.payload.email
    })
    if (account) {
        if (account.local.email == request.payload.email) {
            return h.response({
                statusCode: 400,
                error: "Bad data",
                message: "Email already exits"
            })
        }
    } else {
        const salt = Bcrypt.genSaltSync();
        const hash = Bcrypt.hashSync(request.payload.password, salt);
        try {
            const data = await Account.create({
                local: {
                    email: request.payload.email,
                    password: hash
                },
                username: request.payload.username
            })
            if (data) {
                return h.response({
                    user: {
                        id: data._id,
                        username: data.username,
                        email: data.local.email
                    }
                }).code(201)
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

export async function accountLogin(request, h) {
    const user = await Account.findOne({ 'local.email': request.payload.email });
    if (user) {
        const isValid = Bcrypt.compareSync(request.payload.password, user.local.password);
        if (!isValid) {
            return h.response(Boom.unauthorized('Invalid Password'));
        } else {
            return h.response({
                id: user._id,
                username: user.username,
                email: user.email
            })
        }
    } else {
        return h.response(Boom.unauthorized('Incorrect username or email'));
    }
}

export async function facebookLogin(request, h) {
    if (!request.auth.isAuthenticated) {
        return 'Authentication failed due to: ' + request.auth.error.message;
    } else {

        const data = await Account.findOne({
            "facebook.email": request.auth.credentials.profile.raw.email
        })

        if (data) {
            return h.response({
                id: data._id,
                username: data.facebook.name,
                picture: data.facebook.picture
            })

        } else {
            const data = await Account.create({
                facebook: {
                    token: request.auth.credentials.token,
                    name: request.auth.credentials.profile.raw.name,
                    email: request.auth.credentials.profile.raw.email,
                    picture: {
                        height: request.auth.credentials.profile.raw.picture.data.height,
                        width: request.auth.credentials.profile.raw.picture.data.width,
                        url: request.auth.credentials.profile.raw.picture.data.url
                    }
                },

            })
            return h.response({
                id: data._id,
                username: data.facebook.name,
                picture: data.facebook.picture
            })
        }




    }
}

export async function googleLogin(request, h) {
    if (!request.auth.isAuthenticated) {
        return 'Authentication failed due to: ' + request.auth.error.message;
    } else {
        const data = await Account.findOne({
            "google.email": request.auth.credentials.profile.raw.email
        })


        if (data) {

            return h.response({
                id: data._id,
                username: data.google.name,
                picture: data.google.picture,
            })
        } else {

            const data = await Account.create({
                google: {

                    name: request.auth.credentials.profile.raw.name,
                    email: request.auth.credentials.profile.raw.email,
                    picture: request.auth.credentials.profile.raw.picture
                },

            })
            return h.response({
                id: data._id,
                username: data.google.name,
                picture: data.google.picture
            })

        }

    }
}