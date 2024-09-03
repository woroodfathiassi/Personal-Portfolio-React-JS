import React from 'react';

interface InputProps {
    data: {
        type: string;
        name: string;
        value: string;
        label: string;
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input: React.FC<InputProps> = ({ data, onChange }) => {
    
    return (
        <div className="mb-4 w-full">
            <label htmlFor={data.name} className="capitalize text-sm font-bold dark:text-gray-200">{data.label}</label>
            {
                data.type === 'textarea' ? 
                (
                    <textarea 
                        name={data.name} 
                        id={data.name} 
                        onChange={onChange}
                        value={data.value}
                        placeholder={`please enter your ${data.label}`}
                        className='mt-2 h-32 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-mainColor focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300'
                        required
                    ></textarea>
                ) : (
                    <input
                        type={data.type} 
                        name={data.name}
                        id={data.name}
                        onChange={onChange}
                        value={data.value}
                        placeholder={`please enter your ${data.label}`}
                        className='mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-mainColor focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300'
                        required
                    />
                )
            }
            
        </div>
    );
};

export default Input;
