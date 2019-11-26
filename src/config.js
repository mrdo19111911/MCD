import crypto from 'crypto';
export const secretKey = crypto.randomBytes(256).toString('base64');