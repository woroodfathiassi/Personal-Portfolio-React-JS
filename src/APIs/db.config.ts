// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

async function getAllProjecs() {
    const { data, error } = await supabase
        .from('Project')  
        .select('*')   
        .order('date', { ascending: false });
    
    if (error) {
        console.error('Error selecting data:', error)
        return null
    }
    
    return data    
}

async function getAllMarkdown() {
    const { data, error } = await supabase
        .from('Markdown')  
        .select('*')   
        .order('date', { ascending: false });
    
    if (error) {
        console.error('Error selecting data:', error)
        return null
    }
    
    return data    
}

export { getAllProjecs, getAllMarkdown };