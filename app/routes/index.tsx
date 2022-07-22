import { Form } from "@remix-run/react";
import { redisClient } from "../lib/redis";
import { randomUUID } from "~/utils/uuid.server";
export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const website = formData.get("test");
  const id = randomUUID();
  const redis = await redisClient();
  console.log(id);
  await redis.set("link:" + id, website);

  await redis.expire(`link:${id}`, 60 * 60);

  return formData;
};

export default function Index() {
  return (
    <Form method="post">
      <input name="test" type="text" />

      <button type="submit">Submit</button>
    </Form>
  );
}
