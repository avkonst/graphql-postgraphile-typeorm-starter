/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent?: Parent,
  args?: Args,
  context?: Context,
  info?: GraphQLResolveInfo
) => Promise<Result> | Result;

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> = {
  subscribe<R = Result, P = Parent>(
    parent?: P,
    args?: Args,
    context?: Context,
    info?: GraphQLResolveInfo
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent?: P,
    args?: Args,
    context?: Context,
    info?: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
};

/** A location in a connection that can be used for resuming pagination. */
export type Cursor = any;

/** A signed eight-byte integer. The upper big integer values are greater then themax value for a JavaScript number. Therefore all big integers will be output asstrings and not numbers. */
export type BigInt = any;
/** An object with a globally unique `ID`. */
export interface Node {
  nodeId: string /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */;
}

export interface Query {
  me?: User | null;
  allPhotos?: PhotosConnection | null /** Reads and enables pagination through a set of `Photo`. */;
}

export interface User {
  id: string;
  email: string;
  name: string;
}
/** A connection to a list of `Photo` values. */
export interface PhotosConnection {
  nodes: (Photo | null)[] /** A list of `Photo` objects. */;
  edges: PhotosEdge[] /** A list of edges which contains the `Photo` and cursor to aid in pagination. */;
  pageInfo: PageInfo /** Information to aid in pagination. */;
  totalCount?:
    | number
    | null /** The count of *all* `Photo` you could get from the connection. */;
}

export interface Photo extends Node {
  nodeId: string /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */;
  id: number;
  name: string;
  description: string;
  filename: string;
  views: number;
  isPublished: boolean;
}
/** A `Photo` edge in the connection. */
export interface PhotosEdge {
  cursor?: Cursor | null /** A cursor for use in pagination. */;
  node?: Photo | null /** The `Photo` at the end of the edge. */;
}
/** Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean /** When paginating forwards, are there more items? */;
  hasPreviousPage: boolean /** When paginating backwards, are there more items? */;
  startCursor?: Cursor | null /** When paginating backwards, the cursor to continue. */;
  endCursor?: Cursor | null /** When paginating forwards, the cursor to continue. */;
}

export interface Mutation {
  signup: AuthPayload;
  login: AuthPayload;
  createPhoto?: CreatePhotoPayload | null /** Creates a single `Photo`. */;
  deletePhoto?: DeletePhotoPayload | null /** Deletes a single `Photo` using its globally unique id. */;
}

export interface AuthPayload {
  token: string;
  user: User;
}
/** The output of our create `Photo` mutation. */
export interface CreatePhotoPayload {
  clientMutationId?:
    | string
    | null /** The exact same `clientMutationId` that was provided in the mutation input,unchanged and unused. May be used by a client to track mutations. */;
  photo?: Photo | null /** The `Photo` that was created by this mutation. */;
  photoEdge?: PhotosEdge | null /** An edge for our `Photo`. May be used by Relay 1. */;
}
/** The output of our delete `Photo` mutation. */
export interface DeletePhotoPayload {
  clientMutationId?:
    | string
    | null /** The exact same `clientMutationId` that was provided in the mutation input,unchanged and unused. May be used by a client to track mutations. */;
  photo?: Photo | null /** The `Photo` that was deleted by this mutation. */;
  deletedPhotoId?: string | null;
  photoEdge?: PhotosEdge | null /** An edge for our `Photo`. May be used by Relay 1. */;
}

export interface Migration extends Node {
  nodeId: string /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */;
  id: number;
  timestamp: BigInt;
  name: string;
}
/** A condition to be used against `Photo` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export interface PhotoCondition {
  id?: number | null /** Checks for equality with the object’s `id` field. */;
  name?:
    | string
    | null /** Checks for equality with the object’s `name` field. */;
  description?:
    | string
    | null /** Checks for equality with the object’s `description` field. */;
  filename?:
    | string
    | null /** Checks for equality with the object’s `filename` field. */;
  views?:
    | number
    | null /** Checks for equality with the object’s `views` field. */;
  isPublished?:
    | boolean
    | null /** Checks for equality with the object’s `isPublished` field. */;
}
/** All input for the create `Photo` mutation. */
export interface CreatePhotoInput {
  clientMutationId?:
    | string
    | null /** An arbitrary string value with no semantic meaning. Will be included in thepayload verbatim. May be used to track mutations by the client. */;
  photo: PhotoInput /** The `Photo` to be created by this mutation. */;
}
/** An input for mutations affecting `Photo` */
export interface PhotoInput {
  id?: number | null;
  name: string;
  description: string;
  filename: string;
  views: number;
  isPublished: boolean;
}
/** All input for the `deletePhoto` mutation. */
export interface DeletePhotoInput {
  clientMutationId?:
    | string
    | null /** An arbitrary string value with no semantic meaning. Will be included in thepayload verbatim. May be used to track mutations by the client. */;
  nodeId: string /** The globally unique `ID` which will identify a single `Photo` to be deleted. */;
}
export interface AllPhotosQueryArgs {
  first?: number | null /** Only read the first `n` values of the set. */;
  last?: number | null /** Only read the last `n` values of the set. */;
  offset?:
    | number
    | null /** Skip the first `n` values from our `after` cursor, an alternative to cursorbased pagination. May not be used with `last`. */;
  before?: Cursor | null /** Read all values in the set before (above) this cursor. */;
  after?: Cursor | null /** Read all values in the set after (below) this cursor. */;
  orderBy?:
    | PhotosOrderBy[]
    | null /** The method to use when ordering `Photo`. */;
  condition?: PhotoCondition | null /** A condition to be used in determining which values should be returned by the collection. */;
}
export interface SignupMutationArgs {
  email: string;
  password: string;
  name: string;
}
export interface LoginMutationArgs {
  email: string;
  password: string;
}
export interface CreatePhotoMutationArgs {
  input: CreatePhotoInput /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */;
}
export interface DeletePhotoMutationArgs {
  input: DeletePhotoInput /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */;
}
export interface PhotoEdgeCreatePhotoPayloadArgs {
  orderBy?:
    | PhotosOrderBy[]
    | null /** The method to use when ordering `Photo`. */;
}
export interface PhotoEdgeDeletePhotoPayloadArgs {
  orderBy?:
    | PhotosOrderBy[]
    | null /** The method to use when ordering `Photo`. */;
}
/** Methods to use when ordering `Photo`. */
export type PhotosOrderBy =
  | "NATURAL"
  | "ID_ASC"
  | "ID_DESC"
  | "NAME_ASC"
  | "NAME_DESC"
  | "DESCRIPTION_ASC"
  | "DESCRIPTION_DESC"
  | "FILENAME_ASC"
  | "FILENAME_DESC"
  | "VIEWS_ASC"
  | "VIEWS_DESC"
  | "IS_PUBLISHED_ASC"
  | "IS_PUBLISHED_DESC"
  | "PRIMARY_KEY_ASC"
  | "PRIMARY_KEY_DESC";

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    me?: MeResolver<User | null, any, Context>;
    allPhotos?: AllPhotosResolver<
      PhotosConnection | null,
      any,
      Context
    > /** Reads and enables pagination through a set of `Photo`. */;
  }

  export type MeResolver<
    R = User | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AllPhotosResolver<
    R = PhotosConnection | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, AllPhotosArgs>;
  export interface AllPhotosArgs {
    first?: number | null /** Only read the first `n` values of the set. */;
    last?: number | null /** Only read the last `n` values of the set. */;
    offset?:
      | number
      | null /** Skip the first `n` values from our `after` cursor, an alternative to cursorbased pagination. May not be used with `last`. */;
    before?: Cursor | null /** Read all values in the set before (above) this cursor. */;
    after?: Cursor | null /** Read all values in the set after (below) this cursor. */;
    orderBy?:
      | PhotosOrderBy[]
      | null /** The method to use when ordering `Photo`. */;
    condition?: PhotoCondition | null /** A condition to be used in determining which values should be returned by the collection. */;
  }
}

export namespace UserResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<string, any, Context>;
    email?: EmailResolver<string, any, Context>;
    name?: NameResolver<string, any, Context>;
  }

  export type IdResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type EmailResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** A connection to a list of `Photo` values. */
export namespace PhotosConnectionResolvers {
  export interface Resolvers<Context = any> {
    nodes?: NodesResolver<
      (Photo | null)[],
      any,
      Context
    > /** A list of `Photo` objects. */;
    edges?: EdgesResolver<
      PhotosEdge[],
      any,
      Context
    > /** A list of edges which contains the `Photo` and cursor to aid in pagination. */;
    pageInfo?: PageInfoResolver<
      PageInfo,
      any,
      Context
    > /** Information to aid in pagination. */;
    totalCount?: TotalCountResolver<
      number | null,
      any,
      Context
    > /** The count of *all* `Photo` you could get from the connection. */;
  }

  export type NodesResolver<
    R = (Photo | null)[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EdgesResolver<
    R = PhotosEdge[],
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PageInfoResolver<
    R = PageInfo,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type TotalCountResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PhotoResolvers {
  export interface Resolvers<Context = any> {
    nodeId?: NodeIdResolver<
      string,
      any,
      Context
    > /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */;
    id?: IdResolver<number, any, Context>;
    name?: NameResolver<string, any, Context>;
    description?: DescriptionResolver<string, any, Context>;
    filename?: FilenameResolver<string, any, Context>;
    views?: ViewsResolver<number, any, Context>;
    isPublished?: IsPublishedResolver<boolean, any, Context>;
  }

  export type NodeIdResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type DescriptionResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type FilenameResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type ViewsResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type IsPublishedResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** A `Photo` edge in the connection. */
export namespace PhotosEdgeResolvers {
  export interface Resolvers<Context = any> {
    cursor?: CursorResolver<
      Cursor | null,
      any,
      Context
    > /** A cursor for use in pagination. */;
    node?: NodeResolver<
      Photo | null,
      any,
      Context
    > /** The `Photo` at the end of the edge. */;
  }

  export type CursorResolver<
    R = Cursor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NodeResolver<
    R = Photo | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}
/** Information about pagination in a connection. */
export namespace PageInfoResolvers {
  export interface Resolvers<Context = any> {
    hasNextPage?: HasNextPageResolver<
      boolean,
      any,
      Context
    > /** When paginating forwards, are there more items? */;
    hasPreviousPage?: HasPreviousPageResolver<
      boolean,
      any,
      Context
    > /** When paginating backwards, are there more items? */;
    startCursor?: StartCursorResolver<
      Cursor | null,
      any,
      Context
    > /** When paginating backwards, the cursor to continue. */;
    endCursor?: EndCursorResolver<
      Cursor | null,
      any,
      Context
    > /** When paginating forwards, the cursor to continue. */;
  }

  export type HasNextPageResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type HasPreviousPageResolver<
    R = boolean,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type StartCursorResolver<
    R = Cursor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type EndCursorResolver<
    R = Cursor | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any> {
    signup?: SignupResolver<AuthPayload, any, Context>;
    login?: LoginResolver<AuthPayload, any, Context>;
    createPhoto?: CreatePhotoResolver<
      CreatePhotoPayload | null,
      any,
      Context
    > /** Creates a single `Photo`. */;
    deletePhoto?: DeletePhotoResolver<
      DeletePhotoPayload | null,
      any,
      Context
    > /** Deletes a single `Photo` using its globally unique id. */;
  }

  export type SignupResolver<
    R = AuthPayload,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, SignupArgs>;
  export interface SignupArgs {
    email: string;
    password: string;
    name: string;
  }

  export type LoginResolver<
    R = AuthPayload,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, LoginArgs>;
  export interface LoginArgs {
    email: string;
    password: string;
  }

  export type CreatePhotoResolver<
    R = CreatePhotoPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, CreatePhotoArgs>;
  export interface CreatePhotoArgs {
    input: CreatePhotoInput /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */;
  }

  export type DeletePhotoResolver<
    R = DeletePhotoPayload | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, DeletePhotoArgs>;
  export interface DeletePhotoArgs {
    input: DeletePhotoInput /** The exclusive input argument for this mutation. An object type, make sure to see documentation for this object’s fields. */;
  }
}

export namespace AuthPayloadResolvers {
  export interface Resolvers<Context = any> {
    token?: TokenResolver<string, any, Context>;
    user?: UserResolver<User, any, Context>;
  }

  export type TokenResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserResolver<R = User, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
/** The output of our create `Photo` mutation. */
export namespace CreatePhotoPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** The exact same `clientMutationId` that was provided in the mutation input,unchanged and unused. May be used by a client to track mutations. */;
    photo?: PhotoResolver<
      Photo | null,
      any,
      Context
    > /** The `Photo` that was created by this mutation. */;
    photoEdge?: PhotoEdgeResolver<
      PhotosEdge | null,
      any,
      Context
    > /** An edge for our `Photo`. May be used by Relay 1. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PhotoResolver<
    R = Photo | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PhotoEdgeResolver<
    R = PhotosEdge | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PhotoEdgeArgs>;
  export interface PhotoEdgeArgs {
    orderBy?:
      | PhotosOrderBy[]
      | null /** The method to use when ordering `Photo`. */;
  }
}
/** The output of our delete `Photo` mutation. */
export namespace DeletePhotoPayloadResolvers {
  export interface Resolvers<Context = any> {
    clientMutationId?: ClientMutationIdResolver<
      string | null,
      any,
      Context
    > /** The exact same `clientMutationId` that was provided in the mutation input,unchanged and unused. May be used by a client to track mutations. */;
    photo?: PhotoResolver<
      Photo | null,
      any,
      Context
    > /** The `Photo` that was deleted by this mutation. */;
    deletedPhotoId?: DeletedPhotoIdResolver<string | null, any, Context>;
    photoEdge?: PhotoEdgeResolver<
      PhotosEdge | null,
      any,
      Context
    > /** An edge for our `Photo`. May be used by Relay 1. */;
  }

  export type ClientMutationIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PhotoResolver<
    R = Photo | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type DeletedPhotoIdResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PhotoEdgeResolver<
    R = PhotosEdge | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PhotoEdgeArgs>;
  export interface PhotoEdgeArgs {
    orderBy?:
      | PhotosOrderBy[]
      | null /** The method to use when ordering `Photo`. */;
  }
}

export namespace MigrationResolvers {
  export interface Resolvers<Context = any> {
    nodeId?: NodeIdResolver<
      string,
      any,
      Context
    > /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */;
    id?: IdResolver<number, any, Context>;
    timestamp?: TimestampResolver<BigInt, any, Context>;
    name?: NameResolver<string, any, Context>;
  }

  export type NodeIdResolver<
    R = string,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TimestampResolver<
    R = BigInt,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}
