import Redis from 'ioredis';
import DotEnv from 'dotenv';
import { Logger } from '@/utils/logger';

DotEnv.config();

const DB_CLIENT = new Redis(process.env.REDIS_DB_STRING!);

export async function setDatabaseValue(
  key: string,
  value: string | number | Buffer,
) {
  try {
    const result = await DB_CLIENT.set(key, value);
    return result;
  } catch (err) {
    Logger.error(err);
  }
}
