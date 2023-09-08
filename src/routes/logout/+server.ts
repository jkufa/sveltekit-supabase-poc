import { fail, redirect } from "@sveltejs/kit";

export const GET = async ({ request, locals: { supabase } }) => {
  const { error: err } = await supabase.auth.signOut();

  if (err) {
    throw fail(500, {
      error: 'Server error. Please try again later.'
    });
  }

  throw redirect(303, '/');
}