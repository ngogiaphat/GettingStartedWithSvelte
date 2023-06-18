import type {RequestHandler} from './$types';
// GET
export const GET: RequestHandler = async(event: Event) => {
	const options: ResponseInit = {
		status: 418,
		headers: {
			X: '',
			Y: '',
		},
	};
	return new Response('Hello !!!');
};
// POST
export const POST: RequestHandler = async(event: Event) => {
	const data = await event.request.formData();
	const email = data.get('email');
	console.log(email);
	return new Response(
		JSON.stringify({
			success: true,
			}), {
			headers: {
				'Content -type': 'application/json',
			},
		},
	);
};	