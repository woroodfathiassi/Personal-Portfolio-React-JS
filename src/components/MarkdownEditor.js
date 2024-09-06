import { jsx as _jsx } from "react/jsx-runtime";
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
const MarkdownEditor = ({ value, onChange }) => {
    return (_jsx("div", { className: "", children: _jsx(MDEditor, { value: value, onChange: onChange, height: 500, preview: "live" // Options: live, edit, preview
            , className: 'dark:bg-slate-500 ' }) }));
};
export default MarkdownEditor;
