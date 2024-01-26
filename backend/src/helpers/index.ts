import crypto from 'crypto';

const SECRET_KEY = 'SETTLE_UP_SECRET';

export const genRandom = () => crypto.randomBytes(256).toString('base64');

export const auth = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('$')).update(SECRET_KEY).digest('hex');
}