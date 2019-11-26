import Boom from '@hapi/boom';
import Account from '../../models/account.model';
import Bcrypt from 'bcryptjs';

export async function verifyUser(id) {
    const account = await Account.findOne({ _id: id });
    return !!account;
}