import db from "$lib/db.js"

export async function load() {

    return {
        sections: await db.getSections(),
        sensors: await db.getSensors()
    }
}
