import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Input = ({ data, onChange }) => {
    return (_jsxs("div", { className: "mb-4 w-full", children: [_jsx("label", { htmlFor: data.name, className: "capitalize text-sm font-bold dark:text-gray-200", children: data.label }), data.type === 'textarea' ?
                (_jsx("textarea", { name: data.name, id: data.name, onChange: onChange, value: data.value, placeholder: `please enter your ${data.label}`, className: 'mt-2 h-32 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-mainColor focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300', required: true })) : (_jsx("input", { type: data.type, name: data.name, id: data.name, onChange: onChange, value: data.value, placeholder: `please enter your ${data.label}`, className: 'mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-mainColor focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300', required: true }))] }));
};
export default Input;
