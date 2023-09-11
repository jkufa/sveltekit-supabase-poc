import { fail, redirect } from '@sveltejs/kit';

export const POST = async ({ request, locals: { supabase, getSession } }) => {
	const formData = await request.formData();
	const name = formData.get('name');
	const description = formData.get('description');

	const { error } = await supabase.from('tasks').insert({
		name,
		description
	});

	if (error)
		throw fail(500, {
			error: error.message
		});

	throw redirect(303, '/');
};
