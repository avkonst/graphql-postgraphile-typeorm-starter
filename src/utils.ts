import * as jwt from 'jsonwebtoken';
import { Context } from './Context';

export class AuthError extends Error {
    constructor() {
        super('Not authorized');
    }
}

export function getUserId(ctx: Context) {
    const Authorization = ctx.req.headers.authorization;
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '');
        const { userId } = jwt.verify(token, process.env.APP_SECRET || 'secret') as { userId: number };
        return userId;
    }
    throw new AuthError();
}

export function ensure<T>(value: T | null | undefined): T {
    if (value !== undefined && value !== null) {
        return value;
    }
    throw Error(`unexpected '${value}' instance`);
}
