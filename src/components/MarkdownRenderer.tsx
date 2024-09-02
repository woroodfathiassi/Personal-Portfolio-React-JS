import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai  } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import 'katex/dist/katex.min.css';
import '@/markdown.css';

interface MarkdownRendererProps {
    markdown: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
                // h1: ({node, ...props}) => <h1 className="custom-h1" {...props} />,
                // h2: ({node, ...props}) => <h2 className="custom-h2" {...props} />,
                // h3: ({node, ...props}) => <h3 className="custom-h3" {...props} />,
                // p: ({node, ...props}) => <p className="custom-paragraph" {...props} />,
                code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                    <SyntaxHighlighter
                        {...props}
                        PreTag="div"
                        language={match[1]}
                        style={xonokai}
                        className="custom-code-block"
                    >
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                ) : (
                    <code className={className} {...props}>
                    {children}
                    </code>
                );
                }
            }}
        >
            {markdown}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
