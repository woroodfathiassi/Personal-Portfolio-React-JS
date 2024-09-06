// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
async function getAllProjecs() {
    const { data, error } = await supabase
        .from('Project')
        .select('*')
        .order('date', { ascending: false });
    if (error) {
        console.error('Error selecting data:', error);
        return null;
    }
    return data;
}
async function getAllMarkdown() {
    const { data, error } = await supabase
        .from('Markdown')
        .select('*')
        .order('date', { ascending: false });
    if (error) {
        console.error('Error selecting data:', error);
        return null;
    }
    return data;
}
async function addNewProject(title, description, link, date) {
    const { data, error } = await supabase
        .from('Project')
        .insert({ title: title, description: description, link: link, date: date })
        .select();
    if (error) {
        console.error('Error selecting data:', error);
        return null;
    }
    return data;
}
async function addNewBlog(title, content, description, date) {
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Description:', description);
    console.log('Date:', date);
    const { data, error } = await supabase
        .from('Markdown')
        .insert({ title: title, content: content, description: description, date: date })
        .select();
    if (error) {
        console.error('Error selecting data:', error);
        return null;
    }
    return data;
}
export { getAllProjecs, getAllMarkdown, addNewProject, addNewBlog };
