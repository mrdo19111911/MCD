import Account from '../../models/account.model';
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
            return (Boom.unauthorized('Invalid Password'));
        } else {
            return ({
                id: user._id,
                username: user.username,
                email: user.email
            })
        }
    } else {
        return (Boom.unauthorized('Incorrect username or email'));
    }
}