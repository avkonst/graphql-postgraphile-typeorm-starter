import { Context } from '../../Context';
import { getUserId } from '../../utils';

export const post = {
    async createPhoto(parent: any, args: any, ctx: Context, info: any) {
        const unused = getUserId(ctx); // check token
        return ctx.gql.mutation.createPhoto(
            args,
            info
        );
    },

    async deletePhoto(parent: any, args: any, ctx: Context, info: any) {
        const unused = getUserId(ctx); // check token
        return ctx.gql.mutation.deletePhoto(
            args,
            info
        );
    },
};
