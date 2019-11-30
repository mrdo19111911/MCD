import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();
export const secretKey = crypto.randomBytes(256).toString('base64');
export const dbConfigs = {
    uri: `mongodb://${process.env.API_DB_HOST || 'localhost'}`,
    port: 27017,
    dbName: process.env.DB_NAME || 'danhgiathayboi',
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || '123456789'
}