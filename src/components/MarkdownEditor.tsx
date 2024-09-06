import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

interface MarkdownEditorProps {
    value: string;
    onChange: (value: string | undefined) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ value, onChange }) => {

    return (
        <div className="">
            <MDEditor
                value={value}
                onChange={onChange}
                height={500}
                preview="live"  // Options: live, edit, preview
                className='dark:bg-slate-500 '
            />
        </div>
    );
};

export default MarkdownEditor;
