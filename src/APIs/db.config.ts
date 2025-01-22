// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey);

import { db } from './firebase.config';
import { collection, getDocs, query, orderBy, addDoc } from 'firebase/firestore';
import ProjectData from '@/interfaces/ProjectData';

async function getAllProjecs(): Promise<ProjectData[] | null> {
    try {
        const projectsRef = collection(db, 'Projects');
        const q = query(projectsRef, orderBy('date', 'desc')); // Adjust field name if needed
        const querySnapshot = await getDocs(q);

        const projects: ProjectData[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as ProjectData[];

        console.table(projects); // Debugging output, remove in production
        return projects;
    } catch (error) {
        console.error('Error fetching projects from Firestore:', error.message);
        return null;
    }
}

async function addNewProject(title: string, description: string, link: string, date: string) {
    try {
        // Reference the 'Project' collection
        const projectsRef = collection(db, 'Project');

        // Add the new project document
        const docRef = await addDoc(projectsRef, {
            title,
            description,
            link,
            date,
        });

        // Return the added project's document ID
        console.log('Document written with ID:', docRef.id);
        return { id: docRef.id, title, description, link, date };
    } catch (error) {
        console.error('Error adding project to Firestore:', error);
        return null;
    }
}


// async function getAllProjecs() {
//     const { data, error } = await supabase
//         .from('Project')
//         .select('*')
//         .order('date', { ascending: false });
//
//     if (error) {
//         console.error('Error selecting data:', error)
//         return null
//     }
//
//     return data
// }

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

// async function addNewProject(title: string, description: string, link: string, date: string) {
//     const { data, error } = await supabase
//         .from('Project')
//         .insert({title: title, description: description, link: link, date: date})
//         .select()
//
//     if (error) {
//         console.error('Error selecting data:', error)
//         return null
//     }
//
//     return data
// }

async function addNewBlog(title: string, content: string, description: string, date: string) {
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