import { Connection, createConnection } from 'typeorm';
import Operacao from './models/Operacao';
const { host, user, password, database } = JSON.parse(process.env.MYSQL);
let cacheableDb: Connection;
export async function connectDatabase(): Promise<Connection> {
  const entities = [Operacao];
  if (!cacheableDb || !cacheableDb.isConnected) {
    cacheableDb = await createConnection({
      type: 'mysql',
      host,
      port: 3306,
      username: user,
      password,
      database,
      entities,
      logging: true,
      synchronize: false,
    });
  }
  return cacheableDb;
}
