import { redirect, Response } from "@remix-run/node";
import { redisClient } from "~/lib/redis";
export const loader = async ({ params }: any) => {
  const redis = await redisClient();
  const result = await redis.get("link:" + params.linkId);

  return redirect(result as string);
};
