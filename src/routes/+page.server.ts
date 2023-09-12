import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(302, '/signin');
	}

	// Read tasks
	const { data: tasks } = await supabase
		.from('tasks')
		.select(`id, created_at, name, description, completed_at, index`);

	return { url: url.origin, tasks };
};

export const actions: Actions = {
	logout: async ({ locals: { supabase } }) => {
		await supabase.auth.signOut();
		redirect(303, '/');
	},
	create: async ({ request, locals: { supabase } }) => {
		const data = await request.formData();
		const uid = (await supabase.auth.getUser()).data.user?.id;
		const { data: task, error } = await supabase.from('tasks').insert({
			user_id: uid,
			name: data.get('name'),
			description: data.get('description')
		});

		if (error) {
			throw fail(500, {
				error: error.message
			});
		}
	},
	delete: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;

		const { error } = await supabase.from('tasks').delete().eq('id', id);

		if (error) {
			throw fail(500, {
				error: error.message
			});
		}

		throw redirect(303, '/');
	}
};
