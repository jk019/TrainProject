import db from "$lib/db.js"

export async function load() {

    return {
        trains: await db.getTrains(),
        wagons: await db.getWagons(),
    }
}
