import JWT from 'jsonwebtoken';
import { secretKey } from '../../config';

const createToken = (user) => {


    return JWT.sign({ id: user.id, username: user.username, email: user.email },
        secretKey, { algorithm: 'HS256', expiresIn: 60 * 3 }
    );
}

export default createToken;