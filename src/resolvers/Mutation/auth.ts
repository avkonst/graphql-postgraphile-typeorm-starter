import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Context } from '../../Context';
import { ApolloError, AuthenticationError } from 'apollo-server-errors';
import { User } from '../../entity/User';

export const auth = {
    async signup(parent: any, args: any, ctx: Context, info: any) {
        const user = new User();
        user.name = args.name;
        user.email = args.email;
        user.password = await bcrypt.hash(args.password, 10);
        const result = await ctx.orm.manager.save(user);
        return {
            result
        };
    },

    async login(parent: any, { email, password }: any, ctx: Context, info: any) {
        const user = await ctx.orm.manager.findOne(User, { email: email });

        if (!user) {
            throw new ApolloError(`No such user found for email: ${email}`, 'NOT_FOUND');
        }

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new AuthenticationError('Invalid password');
        }

        return {
            user,
            token: jwt.sign({ userId: user.id }, process.env.APP_SECRET || 'secret'),
        };
    },
};
