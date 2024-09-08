import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef, useContext } from 'react';
import AuthContext from '@/store/AuthContext';
import Input from './Input';
import { IoMdAdd } from "react-icons/io";
import { addNewProject } from '@/APIs/db.config';
import ProjectContext from '@/store/ProjectContext';
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
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);
    const handleChange = (e) => {
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
    async function handleSubmit(e) {
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
            const response = await addNewProject(formData.project_name, formData.description, formData.project_link, formData.project_date);
            if (response && response.length > 0) {
                const project = response[0];
                console.log('Project added successfully:', project);
                addProject(project);
                toggleModal();
                setFormData({
                    project_name: '',
                    project_date: '',
                    description: '',
                    project_link: '',
                });
            }
            else {
                console.error('Failed to add the project.');
            }
        }
    }
    return (_jsxs("div", { className: '', children: [isLoggedIn && (_jsx("button", { onClick: toggleModal, className: 'bg-mainColor p-2 rounded-full shadow-md text-white transition-all hover:shadow-zinc-400 dark:hover:shadow-zinc-500', children: _jsx(IoMdAdd, { size: 35 }) })), isOpen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center", children: _jsxs("div", { className: "bg-white p-6 rounded shadow-lg max-w-md w-full dark:bg-gray-900", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Add New Project" }), _jsxs("form", { ref: form, onSubmit: handleSubmit, children: [_jsxs("div", { className: "mb-4", children: [_jsx(Input, { data: { label: 'Project name', type: 'text', name: 'project_name', value: formData.project_name }, onChange: handleChange }), errors.project_name && _jsx("p", { className: "text-red-500 text-sm", children: errors.project_name })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Input, { data: { label: 'Project description', type: 'textarea', name: 'description', value: formData.description }, onChange: handleChange }), errors.description && _jsx("p", { className: "text-red-500 text-sm", children: errors.description })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Input, { data: { label: 'Project Date', type: 'date', name: 'project_date', value: formData.project_date }, onChange: handleChange }), errors.project_date && _jsx("p", { className: "text-red-500 text-sm", children: errors.project_date })] }), _jsxs("div", { className: "mb-4", children: [_jsx(Input, { data: { label: 'Project link', type: 'text', name: 'project_link', value: formData.project_link }, onChange: handleChange }), errors.project_link && _jsx("p", { className: "text-red-500 text-sm", children: errors.project_link })] }), _jsxs("div", { className: "flex justify-end space-x-2", children: [_jsx("button", { type: "button", onClick: toggleModal, className: "bg-gray-500 text-white px-4 py-2 rounded", children: "Cancel" }), _jsx("button", { type: "submit", className: "bg-mainColor text-white px-4 py-2 rounded", children: "Submit" })] })] })] }) }))] }));
};
export default ProjectModal;
