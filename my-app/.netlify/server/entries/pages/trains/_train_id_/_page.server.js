import { d as db } from "../../../../chunks/db.js";
async function load({ params }) {
  return {
    train: await db.getTrain(params.train_id),
    wagons: await db.getWagonsOfTrain(params.train_id)
  };
}
export {
  load
};
