import db from '$lib/db';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const train = await request.json();
	const result = await db.createTrain(train);
	return json({ id: result });
}
