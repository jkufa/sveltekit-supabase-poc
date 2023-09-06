// src/routes/auth/callback/+server.ts
import { redirect } from '@sveltejs/kit'

export const GET = async ({ url, locals: { supabase } }) => {
  const code = url.searchParams.get('code') // get the code from the url query params

  if (code) {
    await supabase.auth.exchangeCodeForSession(code) // exchange the code for a session
  }

  throw redirect(303, '/account')
}