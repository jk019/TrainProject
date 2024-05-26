import { d as db } from "../../../chunks/db.js";
async function load() {
  return {
    sections: await db.getSections(),
    sensors: await db.getSensors(),
    wagons: await db.getWagons()
  };
}
export {
  load
};
