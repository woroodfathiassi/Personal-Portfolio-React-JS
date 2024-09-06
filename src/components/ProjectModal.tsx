import React, { useState, ChangeEvent, useRef, useContext } from 'react';
import AuthContext from '@/store/AuthContext';
import Input from './Input';
import { IoMdAdd } from "react-icons/io";
import { addNewProject } from '@/APIs/db.config';
import ProjectContext from '@/store/ProjectContext';
import ProjectData from '@/interfaces/ProjectData';

const ProjectModal = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const { addProject } = useContext(ProjectContext);
    const form = useRef(null);
    const [formData, setFormData] = useState({
        project_name: '',
        project_date: '',
        description: '',
        project_link: '',
    });
    const [errors, setErrors] = useState({
        project_name: '',
        project_date: '',
        description: '',
        project_link: '',
    });

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
        setErrors({
        ...errors,
        [name]: ''
        });
    };

    async  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        let valid = true;
        const newErrors = {
            project_name: '',
            project_date: '',
            description: '',
            project_link: '',
        };

        if (formData.project_name.trim() === '') {
            newErrors.project_name = 'Project name is required';
            valid = false;
        }
        if (formData.description.trim() === '') {
            newErrors.description = 'Project description is required';
            valid = false;
        }
        if (formData.project_date.trim() === '') {
            newErrors.project_date = 'Project date is required';
            valid = false;
        }
        if (formData.project_link.trim() === '') {
            newErrors.project_link = 'Project link is required';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            const response = await addNewProject(
                formData.project_name,
                formData.description,
                formData.project_link,
                formData.project_date
            );

            if (response && response.length > 0) {
                const project: ProjectData = response[0]; 
            
                console.log('Project added successfully:', project);
            
                addProject(project);

                toggleModal();
                setFormData({
                    project_name: '',
                    project_date: '',
                    description: '',
                    project_link: '',
                });
            } else {
                console.error('Failed to add the project.');
            }
        }
    }

    return (
        <div className=''>
            {isLoggedIn && (
                <button
                    onClick={toggleModal}
                    className='bg-mainColor p-2 rounded-full shadow-md text-white transition-all hover:shadow-zinc-400 dark:hover:shadow-zinc-500'
                >
                    <IoMdAdd size={35} />
                </button>
            )}

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full dark:bg-gray-900">
                        <h2 className="text-xl font-bold mb-4">Add New Project</h2>

                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <Input data={{ label: 'Project name', type: 'text', name: 'project_name', value: formData.project_name }} onChange={handleChange} />
                                {errors.project_name && <p className="text-red-500 text-sm">{errors.project_name}</p>}
                            </div>
                            <div className="mb-4">
                                <Input data={{ label: 'Project description', type: 'textarea', name: 'description', value: formData.description }} onChange={handleChange} />
                                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                            </div>
                            <div className="mb-4">
                                <Input data={{ label: 'Project Date', type: 'date', name: 'project_date', value: formData.project_date }} onChange={handleChange} />
                                {errors.project_date && <p className="text-red-500 text-sm">{errors.project_date}</p>}
                            </div>
                            <div className="mb-4">
                                <Input data={{ label: 'Project link', type: 'text', name: 'project_link', value: formData.project_link }} onChange={handleChange} />
                                {errors.project_link && <p className="text-red-500 text-sm">{errors.project_link}</p>}
                            </div>

                            <div className="flex justify-end space-x-2">
                                <button type="button" onClick={toggleModal} className="bg-gray-500 text-white px-4 py-2 rounded">
                                    Cancel
                                </button>
                                <button type="submit" className="bg-mainColor text-white px-4 py-2 rounded">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectModal;
