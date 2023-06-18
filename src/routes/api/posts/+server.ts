import db from './$lib';
import {json} from "@sveltejs/kit";
import type {RequestHandler} from './$types';
export const GET: RequestHandler = async() => {
	const posts = await db.post.findMany();
	return json(posts);
};