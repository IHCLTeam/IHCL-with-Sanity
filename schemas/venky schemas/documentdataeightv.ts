export default {
    name: 'underFooter',
    title: 'Under Footer',
    type: 'document',
    fields: [
        {
            name: 'sitemap',
            title: 'Sitemap',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'sitemap'
            }
        },
        {
            name: 'accessibility',
            title: 'Accessibility',
            type: 'string',
        },
        {
            name: 'language',
            title: 'Languages',
            type: 'string',
        },
        {
            name: 'privacyPolicy',
            title: 'Privacy Policy',
            type: 'string',
        },
        {
            name: 'terms',
            title: 'Terms of Use',
            type: 'string',
        },
    ]
}