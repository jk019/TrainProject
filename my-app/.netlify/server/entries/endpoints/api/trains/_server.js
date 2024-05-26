import { d as db } from "../../../../chunks/db.js";
import { j as json } from "../../../../chunks/index.js";
async function POST({ request }) {
  const train = await request.json();
  const result = await db.createTrain(train);
  return json({ id: result });
}
export {
  POST
};
