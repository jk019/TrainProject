import db from "$lib/db.js"

export async function load({ params }) {

    return {
        train: await db.getTrain(params.train_id),
        wagons: await db.getWagonsOfTrain(params.train_id)
    };
}
