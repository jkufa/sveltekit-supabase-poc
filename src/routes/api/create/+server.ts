import { fail, redirect } from '@sveltejs/kit';

export const POST = async ({ request, locals: { supabase } }) => {
	const formData = await request.formData();
	const name = formData.get('name');
	const description = formData.get('description');

	const uid = (await supabase.auth.getUser()).data.user?.id;
	const { error } = await supabase.from('tasks').insert({
		user_id: uid,
		name: name,
		description: description
	});

	if (error)
		throw fail(500, {
			error: error.message
		});

	throw redirect(303, '/');
};
