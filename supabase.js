// supabase.js – Supabase client configuration
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Your Supabase project credentials
const supabaseUrl = 'https://ynpednaybirzfcenmwhd.supabase.co';
const supabaseAnonKey = 'sb_publishable_hDkrKWcFuZim7MypNeK0VQ_L_FciXAs';

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper: Get current user
export async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

// Helper: Get current user's profile
export async function getCurrentProfile() {
    const user = await getCurrentUser();
    if (!user) return null;
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
    if (error) return null;
    return data;
}

// Helper: Sign out
export async function signOut() {
    await supabase.auth.signOut();
    sessionStorage.clear();
    window.location.href = 'index.html';
}

// Helper: Check if session exists and redirect accordingly
export async function checkSessionAndRedirect() {
    const user = await getCurrentUser();
    if (!user) return null;
    
    const profile = await getCurrentProfile();
    if (!profile) return null;

    // Redirect based on role
    if (profile.role === 'student') {
        window.location.href = 'dashboard.html';
        return null;
    } else if (profile.role === 'instructor') {
        window.location.href = 'instructor.html';
        return null;
    }
    return profile; // still pending
}
// Additional helper for instructor
export async function getInstructorCourses(instructorId) {
    const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('instructor_id', instructorId);
    if (error) throw error;
    return data;
}

export async function getCourseEnrollments(courseId) {
    const { data, error } = await supabase
        .from('course_enrollments')
        .select('*, profiles(first_name, last_name, student_id)')
        .eq('course_id', courseId);
    if (error) throw error;
    return data;
}

// In supabase.js
export async function confirmEmail(token) {
    const { data, error } = await supabase.auth.verifyOtp({
        token_hash: token,
        type: 'email',
    });
    return { data, error };
}



