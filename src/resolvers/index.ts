import { Query } from './Query';
import { auth } from './Mutation/auth';
import { post } from './Mutation/post';
// import { Node } from './Node';

export default {
    Query,
    // Node,
    Mutation: {
        ...auth,
        ...post
    },
};
