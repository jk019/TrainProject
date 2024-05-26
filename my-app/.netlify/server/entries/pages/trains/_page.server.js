import { d as db } from "../../../chunks/db.js";
async function load() {
  return {
    trains: await db.getTrains(),
    wagons: await db.getWagons()
  };
}
export {
  load
};
