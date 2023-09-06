import { createClient } from "@supabase/supabase-js";
// import { SUPABASE_URL, SUPABASE_KEY } from '$env/dynamic/private'

export const supabase = createClient(
  "https://sorotdyexpbnygemxopl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvcm90ZHlleHBibnlnZW14b3BsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM5NTY4MzEsImV4cCI6MjAwOTUzMjgzMX0.GnBHjlfRNkc9MJD60cCQNCwPuoEv5dtvBnvd5RJgyxI",
);
