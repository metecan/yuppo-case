export interface SEOMetadata {
  title: string;
  description?: string;
  author?: string;
  keywords?: string[];
  createdDate?: string;
}

const generateHTMLHead = (metadata: SEOMetadata): string => {
  const { title, description, author, keywords = [], createdDate = new Date().toISOString() } = metadata;

  const metaKeywords = keywords.length > 0 ? keywords.join(', ') : '';

  const ogDescription = description ? `<meta property="og:description" content="${description}">` : '';
  const twitterDescription = description ? `<meta property="twitter:description" content="${description}">` : '';
  const structuredDataDescription = description ? `"description": "${description}",` : '';
  const structuredDataAuthor = author ? `"author": {"@type": "Person", "name": "${author}"},` : '';

  return `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- Primary Meta Tags -->
    <title>${title}</title>
    <meta name="title" content="${title}">
    ${description ? `<meta name="description" content="${description}">` : ''}
    ${author ? `<meta name="author" content="${author}">` : ''}
    ${metaKeywords ? `<meta name="keywords" content="${metaKeywords}">` : ''}
    <meta name="robots" content="index, follow">
    <meta name="language" content="English">
    <meta name="generator" content="Yuppo Markdown Editor">
    <meta name="created" content="${createdDate}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="${title}">
    ${ogDescription}
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="${title}">
    ${twitterDescription}
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${title}",
        ${structuredDataDescription}
        ${structuredDataAuthor}
        "datePublished": "${createdDate}",
        "dateModified": "${createdDate}",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "#"
        }
    }
    </script>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    
    <!-- Highlight.js CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark.min.css">
</head>`;
};

export default generateHTMLHead;
