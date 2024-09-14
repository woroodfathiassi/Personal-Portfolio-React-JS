import balckLogo from '@/assets/blackLogo.png';

const SchemaMarkup = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Worood Assi",
        "url": "https://woroodassi.netlify.app",
        "description": "Personal Portfolio | Worood Assi",
        "inLanguage": "en",
        "publisher": {
            "@type": "Organization",
            "name": "Worood Assi",
            "logo": {
                "@type": "ImageObject",
                "url": {balckLogo} 
            }
        },
        "datePublished": "2024-09-11T08:00:00+08:00",
        "dateModified": "2024-09-20T09:20:00+08:00",
        "author": {
            "@type": "Person",
            "name": "Worood Assi"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
};

export default SchemaMarkup;
