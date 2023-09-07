// src/routes/+page.server.ts
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Provider } from "@supabase/supabase-js";

// 
const supportedProviders = ["google"];

export const actions = {
  // Action for logging in with a provider
  login: async ({ request, locals, url }) => {
    const provider = url.searchParams.get("provider") as Provider;

    // If there's no provider or it's not supported, return a 400
    if (!provider || !supportedProviders.includes(provider)) {
      return fail(400, {
        error: `Provider ${provider} either does not exist or is not supported."`,
      });
    }

    // Sign in with the provider
    const { data, error: err } = await locals.supabase.auth.signInWithOAuth({
      provider: provider,
    });


    // If there's an error returned from signing in, return a 500 with the error
    if (err) {
      return fail(500, {
        error: err.message,
      });
    }

    // We did it! Redirect the user to the URL provided by the provider
    throw redirect(303, data.url);
  },
};

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
  const session = await getSession();

  // if the user is already logged in return them to the account page
  if (session) {
    throw redirect(303, "/account");
  }

  return { url: url.origin };
};
