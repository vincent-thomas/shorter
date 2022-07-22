import { Client } from "redis-om";

const client = new Client();

export const redisClient = async () => {
  await client.open(process.env.REDIS_URL);
  return client;
};
