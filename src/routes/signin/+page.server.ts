import { AuthApiError } from '@supabase/gotrue-js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	signin: async ({ request, url, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { data, error } = await supabase.auth.signInWithPassword({ email, password });

		if (error && error instanceof AuthApiError) {
			if (error.status === 400) {
				redirect(303, '/signin');
				return fail(400, {
					error: 'Invalid credentials'
				});
			}
			redirect(303, '/signin');
			return fail(500, {
				message: 'Server error. Try again later.'
			});
		}
		throw redirect(303, '/');
	}
};
