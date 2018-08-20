/* tslint:disable */
import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import schema from  '../embeddedPostgraphile/index'

export interface Query {
    query: <T = Query>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    nodeId: <T = ID_Output>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { nodeId: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    allMigrations: <T = MigrationsConnection | null>(args: { first?: Int, last?: Int, offset?: Int, before?: Cursor, after?: Cursor, orderBy?: MigrationsOrderBy[], condition?: MigrationCondition }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    allPhotos: <T = PhotosConnection | null>(args: { first?: Int, last?: Int, offset?: Int, before?: Cursor, after?: Cursor, orderBy?: PhotosOrderBy[], condition?: PhotoCondition }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    allUsers: <T = UsersConnection | null>(args: { first?: Int, last?: Int, offset?: Int, before?: Cursor, after?: Cursor, orderBy?: UsersOrderBy[], condition?: UserCondition }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    migrationById: <T = Migration | null>(args: { id: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    photoById: <T = Photo | null>(args: { id: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userById: <T = User | null>(args: { id: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    migration: <T = Migration | null>(args: { nodeId: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    photo: <T = Photo | null>(args: { nodeId: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { nodeId: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createMigration: <T = CreateMigrationPayload | null>(args: { input: CreateMigrationInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPhoto: <T = CreatePhotoPayload | null>(args: { input: CreatePhotoInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = CreateUserPayload | null>(args: { input: CreateUserInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMigration: <T = UpdateMigrationPayload | null>(args: { input: UpdateMigrationInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMigrationById: <T = UpdateMigrationPayload | null>(args: { input: UpdateMigrationByIdInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePhoto: <T = UpdatePhotoPayload | null>(args: { input: UpdatePhotoInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePhotoById: <T = UpdatePhotoPayload | null>(args: { input: UpdatePhotoByIdInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = UpdateUserPayload | null>(args: { input: UpdateUserInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUserById: <T = UpdateUserPayload | null>(args: { input: UpdateUserByIdInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMigration: <T = DeleteMigrationPayload | null>(args: { input: DeleteMigrationInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMigrationById: <T = DeleteMigrationPayload | null>(args: { input: DeleteMigrationByIdInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePhoto: <T = DeletePhotoPayload | null>(args: { input: DeletePhotoInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePhotoById: <T = DeletePhotoPayload | null>(args: { input: DeletePhotoByIdInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = DeleteUserPayload | null>(args: { input: DeleteUserInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUserById: <T = DeleteUserPayload | null>(args: { input: DeleteUserByIdInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {}

export interface Binding {
  query: Query
  mutation: Mutation
  subscription: Subscription
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
  delegateSubscription(fieldName: string, args?: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(...args: any[]): T
}

export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })

/**
 * Types
*/

/*
 * Methods to use when ordering `Migration`.

 */
export type MigrationsOrderBy =   'NATURAL' |
  'ID_ASC' |
  'ID_DESC' |
  'TIMESTAMP_ASC' |
  'TIMESTAMP_DESC' |
  'NAME_ASC' |
  'NAME_DESC' |
  'PRIMARY_KEY_ASC' |
  'PRIMARY_KEY_DESC'

/*
 * Methods to use when ordering `Photo`.

 */
export type PhotosOrderBy =   'NATURAL' |
  'ID_ASC' |
  'ID_DESC' |
  'NAME_ASC' |
  'NAME_DESC' |
  'DESCRIPTION_ASC' |
  'DESCRIPTION_DESC' |
  'FILENAME_ASC' |
  'FILENAME_DESC' |
  'VIEWS_ASC' |
  'VIEWS_DESC' |
  'IS_PUBLISHED_ASC' |
  'IS_PUBLISHED_DESC' |
  'PRIMARY_KEY_ASC' |
  'PRIMARY_KEY_DESC'

/*
 * Methods to use when ordering `User`.

 */
export type UsersOrderBy =   'NATURAL' |
  'ID_ASC' |
  'ID_DESC' |
  'NAME_ASC' |
  'NAME_DESC' |
  'EMAIL_ASC' |
  'EMAIL_DESC' |
  'PASSWORD_ASC' |
  'PASSWORD_DESC' |
  'PRIMARY_KEY_ASC' |
  'PRIMARY_KEY_DESC'

/*
 * All input for the create `Photo` mutation.

 */
export interface CreatePhotoInput {
  clientMutationId?: String
  photo: PhotoInput
}

/*
 * All input for the `deleteUserById` mutation.

 */
export interface DeleteUserByIdInput {
  clientMutationId?: String
  id: Int
}

/*
 * Represents an update to a `Photo`. Fields that are set will be updated.

 */
export interface PhotoPatch {
  id?: Int
  name?: String
  description?: String
  filename?: String
  views?: Float
  isPublished?: Boolean
}

/*
 * An input for mutations affecting `Photo`

 */
export interface PhotoInput {
  id?: Int
  name: String
  description: String
  filename: String
  views: Float
  isPublished: Boolean
}

/*
 * All input for the `updatePhoto` mutation.

 */
export interface UpdatePhotoInput {
  clientMutationId?: String
  nodeId: ID_Input
  photoPatch: PhotoPatch
}

/*
 * A condition to be used against `Migration` object types. All fields are tested
, * for equality and combined with a logical ‘and.’

 */
export interface MigrationCondition {
  id?: Int
  timestamp?: BigInt
  name?: String
}

/*
 * All input for the `updateMigrationById` mutation.

 */
export interface UpdateMigrationByIdInput {
  clientMutationId?: String
  migrationPatch: MigrationPatch
  id: Int
}

/*
 * All input for the `deletePhotoById` mutation.

 */
export interface DeletePhotoByIdInput {
  clientMutationId?: String
  id: Int
}

/*
 * A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’

 */
export interface UserCondition {
  id?: Int
  name?: String
  email?: String
  password?: String
}

/*
 * All input for the `deleteMigrationById` mutation.

 */
export interface DeleteMigrationByIdInput {
  clientMutationId?: String
  id: Int
}

/*
 * Represents an update to a `Migration`. Fields that are set will be updated.

 */
export interface MigrationPatch {
  id?: Int
  timestamp?: BigInt
  name?: String
}

/*
 * All input for the `updateUserById` mutation.

 */
export interface UpdateUserByIdInput {
  clientMutationId?: String
  userPatch: UserPatch
  id: Int
}

/*
 * All input for the `updateMigration` mutation.

 */
export interface UpdateMigrationInput {
  clientMutationId?: String
  nodeId: ID_Input
  migrationPatch: MigrationPatch
}

/*
 * A condition to be used against `Photo` object types. All fields are tested for equality and combined with a logical ‘and.’

 */
export interface PhotoCondition {
  id?: Int
  name?: String
  description?: String
  filename?: String
  views?: Float
  isPublished?: Boolean
}

/*
 * All input for the `updatePhotoById` mutation.

 */
export interface UpdatePhotoByIdInput {
  clientMutationId?: String
  photoPatch: PhotoPatch
  id: Int
}

/*
 * All input for the create `User` mutation.

 */
export interface CreateUserInput {
  clientMutationId?: String
  user: UserInput
}

/*
 * An input for mutations affecting `Migration`

 */
export interface MigrationInput {
  id?: Int
  timestamp: BigInt
  name: String
}

/*
 * All input for the create `Migration` mutation.

 */
export interface CreateMigrationInput {
  clientMutationId?: String
  migration: MigrationInput
}

/*
 * An input for mutations affecting `User`

 */
export interface UserInput {
  id?: Int
  name: String
  email: String
  password: String
}

/*
 * All input for the `deleteUser` mutation.

 */
export interface DeleteUserInput {
  clientMutationId?: String
  nodeId: ID_Input
}

/*
 * All input for the `updateUser` mutation.

 */
export interface UpdateUserInput {
  clientMutationId?: String
  nodeId: ID_Input
  userPatch: UserPatch
}

/*
 * Represents an update to a `User`. Fields that are set will be updated.

 */
export interface UserPatch {
  id?: Int
  name?: String
  email?: String
  password?: String
}

/*
 * All input for the `deleteMigration` mutation.

 */
export interface DeleteMigrationInput {
  clientMutationId?: String
  nodeId: ID_Input
}

/*
 * All input for the `deletePhoto` mutation.

 */
export interface DeletePhotoInput {
  clientMutationId?: String
  nodeId: ID_Input
}

/*
 * An object with a globally unique `ID`.

 */
export interface Node {
  nodeId: ID_Output
}

export interface Photo extends Node {
  nodeId: ID_Output
  id: Int
  name: String
  description: String
  filename: String
  views: Float
  isPublished: Boolean
}

/*
 * A `Migration` edge in the connection.

 */
export interface MigrationsEdge {
  cursor?: Cursor
  node?: Migration
}

/*
 * The output of our update `Photo` mutation.

 */
export interface UpdatePhotoPayload {
  clientMutationId?: String
  photo?: Photo
  photoEdge?: PhotosEdge
}

/*
 * The output of our create `Photo` mutation.

 */
export interface CreatePhotoPayload {
  clientMutationId?: String
  photo?: Photo
  photoEdge?: PhotosEdge
}

/*
 * A connection to a list of `Photo` values.

 */
export interface PhotosConnection {
  nodes: Photo[]
  edges: PhotosEdge[]
  pageInfo: PageInfo
  totalCount?: Int
}

/*
 * A `User` edge in the connection.

 */
export interface UsersEdge {
  cursor?: Cursor
  node?: User
}

/*
 * A connection to a list of `Migration` values.

 */
export interface MigrationsConnection {
  nodes: Migration[]
  edges: MigrationsEdge[]
  pageInfo: PageInfo
  totalCount?: Int
}

export interface User extends Node {
  nodeId: ID_Output
  id: Int
  name: String
  email: String
  password: String
}

/*
 * The output of our delete `Photo` mutation.

 */
export interface DeletePhotoPayload {
  clientMutationId?: String
  photo?: Photo
  deletedPhotoId?: ID_Output
  photoEdge?: PhotosEdge
}

/*
 * The output of our update `Migration` mutation.

 */
export interface UpdateMigrationPayload {
  clientMutationId?: String
  migration?: Migration
  migrationEdge?: MigrationsEdge
}

/*
 * A `Photo` edge in the connection.

 */
export interface PhotosEdge {
  cursor?: Cursor
  node?: Photo
}

/*
 * The output of our delete `Migration` mutation.

 */
export interface DeleteMigrationPayload {
  clientMutationId?: String
  migration?: Migration
  deletedMigrationId?: ID_Output
  migrationEdge?: MigrationsEdge
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: Cursor
  endCursor?: Cursor
}

export interface Migration extends Node {
  nodeId: ID_Output
  id: Int
  timestamp: BigInt
  name: String
}

/*
 * The output of our update `User` mutation.

 */
export interface UpdateUserPayload {
  clientMutationId?: String
  user?: User
  userEdge?: UsersEdge
}

/*
 * The output of our create `Migration` mutation.

 */
export interface CreateMigrationPayload {
  clientMutationId?: String
  migration?: Migration
  migrationEdge?: MigrationsEdge
}

/*
 * The output of our delete `User` mutation.

 */
export interface DeleteUserPayload {
  clientMutationId?: String
  user?: User
  deletedUserId?: ID_Output
  userEdge?: UsersEdge
}

/*
 * A connection to a list of `User` values.

 */
export interface UsersConnection {
  nodes: User[]
  edges: UsersEdge[]
  pageInfo: PageInfo
  totalCount?: Int
}

/*
 * The output of our create `User` mutation.

 */
export interface CreateUserPayload {
  clientMutationId?: String
  user?: User
  userEdge?: UsersEdge
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
A signed eight-byte integer. The upper big integer values are greater then the
max value for a JavaScript number. Therefore all big integers will be output as
strings and not numbers.
*/
export type BigInt = string

/*
A location in a connection that can be used for resuming pagination.
*/
export type Cursor = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean