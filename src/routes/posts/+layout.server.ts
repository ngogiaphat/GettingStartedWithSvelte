import db from "$lib/database";
import type {LayoutServerLoad} from "./$types";
export const load: LayoutServerLoad = async(event: Event) => {
	const posts = await db.posts.findMany({
		select: {
			title: true,
			slug: true,
		},
		take: 4,
	});
	return {posts};
};