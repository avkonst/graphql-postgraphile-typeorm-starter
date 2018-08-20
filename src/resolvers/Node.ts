// Run-time warning:
//   Type "Node" is missing a "resolveType" resolver.
//   Pass false into "resolverValidationOptions.requireResolversForResolveType" to disable this warning.
// can be fixed using this implementation of a node resolution:

// TODO see https://github.com/graphql-cli/graphql-cli/issues/338
// export const Node = {
//     // tslint:disable-next-line:function-name
//     __resolveType(obj: any, context: Context, info: any) {
//         if ((obj as Post).author) {
//             return 'Post';
//         }
//         if ((obj as User).email) {
//             return 'User';
//         }
//         return null;
//     },
// };
