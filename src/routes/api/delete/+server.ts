import { redirect } from '@sveltejs/kit';

export const POST = async ({ request, locals: { supabase, getSession } }) => {
	const formData = await request.formData();
	const id = formData.get('id') as string;

	const { error } = await supabase.from('tasks').delete().eq('id', id);

	throw redirect(303, '/');
};
