import { registerAs } from '@nestjs/config';

export const CONFIG_DATABASE = 'mongo_db';

export default registerAs(CONFIG_DATABASE, () => ({
  uri: process.env.DATABASE_HOST + ':' + process.env.DATABASE_PORT || 27017,
  user: process.env.DATABASE_USER,
  pw: process.env.DATABASE_PASSWORD,
}));
