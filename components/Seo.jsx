import Head from 'next/head';

export default function Seo({ title, description, canonical, noindex = false, jsonLd }) {
    const siteName = 'Careviah';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    return (
        <Head>
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            {noindex && <meta name="robots" content="noindex,nofollow" />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Twitter */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            {canonical && <meta property="og:url" content={canonical} />}
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Favicon (optional) */}
            <link rel="icon" href="/favicon.ico" />

            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
        </Head>
    );
}
