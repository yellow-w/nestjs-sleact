import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();


const configurationOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['@src/**/entities/*.entity.ts'],
  migrations: [__dirname + '/src/migrations/*.ts'],
  synchronize: false,
  logging: true,
}
const dataSource = new DataSource(configurationOptions);

export default dataSource;