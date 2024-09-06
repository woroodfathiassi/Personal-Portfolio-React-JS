import { jsx as _jsx } from "react/jsx-runtime";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkHtml from 'remark-html'; // Import remark-html
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import 'katex/dist/katex.min.css';
import '@/markdown.css';
const MarkdownRenderer = ({ markdown }) => {
    return (_jsx(ReactMarkdown, { remarkPlugins: [remarkGfm, remarkMath, remarkHtml], rehypePlugins: [rehypeKatex], components: {
            code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (_jsx(SyntaxHighlighter, { ...props, PreTag: "div", language: match[1], style: xonokai, className: "custom-code-block", children: String(children).replace(/\n$/, '') })) : (_jsx("code", { className: className, ...props, children: children }));
            }
        }, children: markdown }));
};
export default MarkdownRenderer;
