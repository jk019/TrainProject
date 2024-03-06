import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';
import { Train } from '../types/Train';

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db('trainproject') // select database



// Get all trains
async function getTrains() {
    let trains = [];
    try {
        const collection = db.collection('train');

        // You can specify a query/filter here
        // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
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