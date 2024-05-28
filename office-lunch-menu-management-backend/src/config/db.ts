import {Pool} from 'pg';

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'office_lunch_db',
    password: 'postgres',
    port: 5432,
  });
  