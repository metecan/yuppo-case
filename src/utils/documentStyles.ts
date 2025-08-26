const getDocumentStyles = (): string => {
  return `
        :root {
            --background: #ffffff;
            --foreground: #171717;
            --secondary-background: #f8f9fa;
            --muted-foreground: #6c757d;
            --border-color: #e2e8f0;
            --code-background: #f5f5f5;
            --code-foreground: #d63384;
            --link-color: #3b82f6;
            --accent-color: #3b82f6;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --background: #0a0a0a;
                --foreground: #ededed;
                --secondary-background: #1e293b;
                --muted-foreground: #94a3b8;
                --border-color: #27272a;
                --code-background: #1e293b;
                --code-foreground: #f59e0b;
                --link-color: #3b82f6;
                --accent-color: #3b82f6;
            }
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: var(--foreground);
            background-color: var(--background);
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        @media (max-width: 768px) {
            body {
                padding: 1rem;
            }
        }
        
        h1, h2, h3, h4, h5, h6 {
            margin: 1.5rem 0 1rem 0;
            font-weight: 600;
            line-height: 1.3;
            color: var(--foreground);
        }
        
        h1:first-child,
        h2:first-child,
        h3:first-child,
        h4:first-child,
        h5:first-child,
        h6:first-child {
            margin-top: 0;
        }
        
        h1 { font-size: 2rem; }
        h2 { font-size: 1.5rem; }
        h3 { font-size: 1.25rem; }
        h4 { font-size: 1.125rem; }
        h5 { font-size: 1rem; }
        h6 { font-size: 0.875rem; }
        
        p {
            margin: 1rem 0;
            color: var(--foreground);
        }
        
        p:first-child {
            margin-top: 0;
        }
        
        p:last-child {
            margin-bottom: 0;
        }
        
        a {
            color: var(--link-color);
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        ul, ol {
            margin: 1rem 0;
            padding-left: 2rem;
        }
        
        li {
            margin: 0.5rem 0;
            color: var(--foreground);
        }
        
        ul ul, ol ol, ul ol, ol ul {
            margin: 0.5rem 0;
        }
        
        code {
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            background: var(--code-background);
            padding: 0.125rem 0.25rem;
            border-radius: 0.25rem;
            font-size: 0.875em;
            color: var(--code-foreground);
        }
        
        pre {
            background: var(--code-background);
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin: 1rem 0;
            border: 1px solid var(--border-color);
        }
        
        pre code {
            background: transparent;
            padding: 0;
            border-radius: 0;
            font-size: 0.875rem;
            color: inherit;
        }
        
        blockquote {
            margin: 1rem 0;
            padding: 0.5rem 1rem;
            border-left: 4px solid var(--accent-color);
            background: var(--secondary-background);
            color: var(--muted-foreground);
            font-style: italic;
        }
        
        blockquote p {
            margin: 0.5rem 0;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
        }
        
        th, td {
            padding: 0.75rem;
            text-align: left;
            border-bottom: 1px solid var(--border-color);
        }
        
        th {
            font-weight: 600;
            background: var(--secondary-background);
        }
        
        tr:nth-child(even) {
            background: var(--secondary-background);
        }
        
        hr {
            margin: 2rem 0;
            border: none;
            border-top: 1px solid var(--border-color);
        }
        
        img {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            margin: 1rem 0;
        }
        
        /* Syntax highlighting styles */
        .hljs {
            background: var(--code-background) !important;
            color: var(--code-foreground) !important;
            padding: 1rem !important;
            border-radius: 0.5rem !important;
            font-size: 0.875rem !important;
            line-height: 1.5 !important;
        }
        
        /* Print styles */
        @media print {
            body {
                max-width: none;
                padding: 0;
                color: #000;
                background: #fff;
            }
            
            pre {
                background-color: #f5f5f5 !important;
                color: #000 !important;
            }
            
            code {
                background-color: #f5f5f5 !important;
                color: #000 !important;
            }
        }
    `;
};

export default getDocumentStyles;
