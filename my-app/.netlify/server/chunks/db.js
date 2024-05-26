import { MongoClient, ObjectId } from "mongodb";
import "./client.js";
const DB_URI = "mongodb+srv://trainuser:zlQgdYdTlZ8Qq6VE@cluster0.ynkcqxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("trainproject");
async function getTrains() {
  let trains = [];
  try {
    const collection = db.collection("train");
    const query = {};
    trains = await collection.find(query).toArray();
    trains.forEach((train) => {
      train._id = train._id.toString();
    });
  } catch (error) {
  }
  return trains;
}
async function getTrain(id) {
  let train = null;
  try {
    const collection = db.collection("train");
    const query = { _id: new ObjectId(id) };
    train = await collection.findOne(query);
    if (!train) {
      console.log("No train with id " + id);
    } else {
      train._id = train._id.toString();
    }
  } catch (error) {
    console.log(error.message);
  }
  return train;
}
async function createTrain(train) {
  try {
    const collection = db.collection("train");
    const result = await collection.insertOne(train);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }
  return null;
}
async function updateTrain(train) {
  try {
    let id = train._id;
    delete train._id;
    const collection = db.collection("train");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: train });
    if (result.matchedCount === 0) {
      console.log("No train with id " + id);
    } else {
      console.log("Train with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}
async function deleteTrain(id) {
  try {
    const collection = db.collection("train");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);
    if (result.deletedCount === 0) {
      console.log("No object with id " + id);
    } else {
      console.log("Object with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}
async function getWagons() {
  let wagons = [];
  try {
    const collection = db.collection("wagon");
    const query = {};
    wagons = await collection.find(query).toArray();
    wagons.forEach((wagon) => {
      wagon._id = wagon._id.toString();
    });
  } catch (error) {
  }
  return wagons;
}
async function getWagonsOfTrain(train_id) {
  let wagons = [];
  try {
    const collection = db.collection("wagon");
    const query = { train_id };
    wagons = await collection.find(query).toArray();
    wagons.forEach((wagon) => {
      wagon._id = wagon._id.toString();
    });
  } catch (error) {
  }
  return wagons;
}
async function getSections() {
  let sections = [];
  try {
    const collection = db.collection("section");
    const query = {};
    sections = await collection.find(query).toArray();
    sections.forEach((section) => {
      section._id = section._id.toString();
    });
  } catch (error) {
  }
  return sections;
}
async function getSectionsOfWagon(wagon_id2) {
  let sections = [];
  try {
    const collection = db.collection("section");
    const query = { wagon_id: wagon_id2 };
    sections = await collection.find(query).toArray();
    sections.forEach((section) => {
      section._id = section._id.toString();
    });
  } catch (error) {
  }
  return sections;
}
async function getSensors() {
  let sensors = [];
  try {
    const collection = db.collection("sensor");
    const query = {};
    sensors = await collection.find(query).toArray();
    sensors.forEach((sensor) => {
      sensor._id = sensor._id.toString();
    });
  } catch (error) {
  }
  return sensors;
}
async function getSensorsOfSection(section_id) {
  let sensors = [];
  try {
    const collection = db.collection("sensor");
    const query = { wagon_id };
    sensors = await collection.find(query).toArray();
    sensors.forEach((sensor) => {
      sensor._id = sensor._id.toString();
    });
  } catch (error) {
  }
  return sensors;
}
const db$1 = {
  getTrains,
  getTrain,
  createTrain,
  updateTrain,
  deleteTrain,
  getWagonsOfTrain,
  getWagons,
  getSectionsOfWagon,
  getSections,
  getSensorsOfSection,
  getSensors
};
export {
  db$1 as d
};
