import { fail, redirect } from '@sveltejs/kit';

export const POST = async ({ request, locals: { supabase, getSession } }) => {
	const formData = await request.formData();
	const name = formData.get('name');
	const description = formData.get('description');

	const session = await getSession();

	const { error } = await supabase.from('tasks').insert({
		name,
		description
	});

	redirect(303, '/');

	throw redirect(303, '/');
};
