import { getUserId } from '../utils';
import { Context } from '../Context';

export const Query = {
    async allPhotos(parent: any, args: any, ctx: Context, info: any) {
        const unused = getUserId(ctx); // check token
        return ctx.gql.query.allPhotos(
            args,
            info
        );
    },

    async me(parent: any, args: any, ctx: Context, info: any) {
        const id = getUserId(ctx);
        return ctx.gql.query.userById({ id: id }, info);
    },
};
