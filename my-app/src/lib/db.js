import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';
import { invalidateAll } from "$app/navigation";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db('trainproject') // select database

//////////////////////////////
// Trains
//////////////////////////////

// Get all trains
async function getTrains() {
    let trains = [];
    try {
        const collection = db.collection('train');

        const query = {};

        // Get all objects that match the query
        trains = await collection.find(query).toArray();
        trains.forEach(train => {
            train._id = train._id.toString(); // convert ObjectId to String
        });
    } catch (error) {
        // TODO: errorhandling
    }
    return trains;
}

// Get trains by id
async function getTrain(id) {
    let train = null;
    try {
        const collection = db.collection('train');
        const query = { _id: new ObjectId(id) }; // filter by id
        train = await collection.findOne(query);

        if (!train) {
            console.log("No train with id " + id);
            // TODO: errorhandling
        } else {
            train._id = train._id.toString(); // convert ObjectId to String
        }
    } catch (error) {
        // TODO: errorhandling
        console.log(error.message);
    }
    return train;
}


// create a Train
async function createTrain(train) {
    try {
        const collection = db.collection('train');
        const result = await collection.insertOne(train);
        return result.insertedId.toString(); // convert ObjectId to String
    } catch (error) {
        // TODO: errorhandling
        console.log(error.message);
    }
    return null;
}

// update train
// returns: id of the updated artist or null, if artist could not be updated
async function updateTrain(train) {

    try {
        let id = train._id;
        delete train._id; // delete the _id from the object, because the _id cannot be updated
        const collection = db.collection('train');
        const query = { _id: new ObjectId(id) }; // filter by id
        const result = await collection.updateOne(query, { $set: train });

        if (result.matchedCount === 0) {
            console.log("No train with id " + id);
            // TODO: errorhandling
        }
        else {
            console.log("Train with id " + id + " has been updated.");
            return id;
        }
    } catch (error) {
        // TODO: errorhandling
        console.log(error.message);
    }
    return null;
}

// delete train by id
// returns: id of the deleted train or null, if train could not be deleted
async function deleteTrain(id) {

    try {
        const collection = db.collection('train');
        const query = { _id: new ObjectId(id) }; // filter by id
        const result = await collection.deleteOne(query);

        if (result.deletedCount === 0) {
            console.log("No object with id " + id)
        }
        else {
            console.log("Object with id " + id + " has been successfully deleted.")
            return id;
        }
    } catch (error) {
        // TODO: errorhandling
        console.log(error.message);
    }
    return null;
}


//////////////////////////////
// Wagons
//////////////////////////////

// Get all wagons
async function getWagons() {
    let wagons = [];
    try {
        const collection = db.collection('wagon');

        const query = {};

        // Get all objects that match the query
        wagons = await collection.find(query).toArray();
        wagons.forEach(wagon => {
            wagon._id = wagon._id.toString(); // convert ObjectId to String
        });
    } catch (error) {
        // TODO: errorhandling
    }
    return wagons;
}

// Get all wagons of a train
async function getWagonsOfTrain(train_id) {
    let wagons = [];
    try {
        const collection = db.collection('wagon');

        // Update the query to match wagons with the given train_id
        const query = { train_id: train_id };

        // Get all objects that match the query
        wagons = await collection.find(query).toArray();
        wagons.forEach(wagon => {
            wagon._id = wagon._id.toString(); // convert ObjectId to String
        });
    } catch (error) {
        // TODO: errorhandling
    }
    return wagons;
}

//////////////////////////////
// Sections
//////////////////////////////


// Get all sections
async function getSections() {
    let sections = [];
    try {
        const collection = db.collection('section');

        const query = {};

        // Get all objects that match the query
        sections = await collection.find(query).toArray();
        sections.forEach(section => {
            section._id = section._id.toString(); // convert ObjectId to String
        });
    } catch (error) {
        // TODO: errorhandling
    }
    return sections;
}

// Get all sections of a wagon
async function getSectionsOfWagon(wagon_id) {
    let sections = [];
    try {
        const collection = db.collection('section');

        const query = { wagon_id: wagon_id };

        // Get all objects that match the query
        sections = await collection.find(query).toArray();
        sections.forEach(section => {
            section._id = section._id.toString(); // convert ObjectId to String
        });
    } catch (error) {
        // TODO: errorhandling
    }
    return sections;
}



//////////////////////////////
// Sensors
//////////////////////////////

// Get all sensors
async function getSensors() {
    let sensors = [];
    try {
        const collection = db.collection('sensor');

        const query = {};

        // Get all objects that match the query
        sensors = await collection.find(query).toArray();
        sensors.forEach(sensor => {
            sensor._id = sensor._id.toString(); // convert ObjectId to String
        });
    } catch (error) {
        // TODO: errorhandling
    }
    return sensors;
}

// Get all sensors of a section
async function getSensorsOfSection(section_id) {
    let sensors = [];
    try {
        const collection = db.collection('sensor');

        const query = { wagon_id: wagon_id };

        // Get all objects that match the query
        sensors = await collection.find(query).toArray();
        sensors.forEach(sensor => {
            sensor._id = sensor._id.toString(); // convert ObjectId to String
        });
    } catch (error) {
        // TODO: errorhandling
    }
    return sensors;
}




export default {
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
}