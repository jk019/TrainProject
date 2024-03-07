import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';
import { invalidateAll } from "$app/navigation";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db('trainproject') // select database



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

export default{
    getTrains,
}