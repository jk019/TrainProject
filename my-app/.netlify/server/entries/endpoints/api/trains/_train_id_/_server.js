import { d as db } from "../../../../../chunks/db.js";
import { j as json } from "../../../../../chunks/index.js";
async function DELETE({ params }) {
  const id = params.train_id;
  const result = await db.deleteTrain(id);
  return json({ id: result });
}
async function PUT({ request }) {
  const train = await request.json();
  const result = await db.updateTrain(train);
  return json({ id: result });
}
export {
  DELETE,
  PUT
};
