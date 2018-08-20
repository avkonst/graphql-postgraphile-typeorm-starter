import {MigrationInterface, QueryRunner} from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export class Migration1534731480120 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const schema = (queryRunner.connection.options as PostgresConnectionOptions).schema;
        await queryRunner.query(`CREATE TABLE "${schema}"."photo" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text NOT NULL, "filename" character varying NOT NULL, "views" double precision NOT NULL, "isPublished" boolean NOT NULL, CONSTRAINT "PK_3de63c33511727e82cefc06c2ae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${schema}"."user" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_89249f6d281c7676eb93d2276c4" UNIQUE ("email"), CONSTRAINT "PK_ba3483e2dc9d4b8478d7cc931ab" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const schema = (queryRunner.connection.options as PostgresConnectionOptions).schema;
        await queryRunner.query(`DROP TABLE "${schema}"."user"`);
        await queryRunner.query(`DROP TABLE "${schema}"."photo"`);
    }

}
