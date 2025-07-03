import { createClient } from "@supabase/supabase-js";
import AppConstants from "../../src/shared/constants/AppConstant";

const SUPABASE_URL = AppConstants.SUPABASE_API_BASE_URL;
const SUPABASE_ANON_KEY = AppConstants.SUPABASE_ANON_KEY;

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
