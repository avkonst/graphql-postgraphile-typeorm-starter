import { Connection } from 'typeorm';
import { Binding } from './generated/postgraphile';
import { IncomingMessage, ServerResponse } from 'http';

export interface Context {
    orm: Connection;
    gql: Binding;
    req: IncomingMessage;
    res: ServerResponse;
}
