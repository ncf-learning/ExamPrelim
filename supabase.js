// supabase.js – Supabase client configuration
// This file is imported by other pages.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Your Supabase project credentials
const supabaseUrl = 'https://ynpednaybirzfcenmwhd.supabase.co';
const supabaseAnonKey = 'sb_publishable_hDkrKWcFuZim7MypNeK0VQ_L_FciXAs';

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Also export a helper to check the current session (optional)
export async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

export async function getCurrentProfile() {
    const user = await getCurrentUser();
    if (!user) return null;
    const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
    return data;
}
