import db from '$lib/db';
import { json } from '@sveltejs/kit';

export async function DELETE({ params }) {
	const id = params.train_id;
	const result = await db.deleteTrain(id);
	return json({ id: result });
}

export async function PUT({ request }) {
    const train = await request.json();
	const result = await db.updateTrain(train);
	return json({ id: result });
}
