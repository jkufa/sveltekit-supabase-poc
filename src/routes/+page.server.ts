import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(302, '/login');
	}

	// Read tasks
	const { data: tasks } = await supabase
		.from('tasks')
		.select(`created_at, name, description, completed_at, index`);

	return { url: url.origin, tasks };
};
