export default {
    name: 'footerIntro1',
    title: 'Footer Intro',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'brand',
            title: 'Brand',
            type: 'string',
        },
        {
            name: 'taj',
            title: 'Taj',
            type: 'string',
        },
        {
            name: 'seleq',
            title: 'SeleQtions',
            type: 'string',
        },
        {
            name: 'vivan',
            title: 'Vivanta',
            type: 'string',
        },
        {
            name: 'ginger',
            title: 'Ginger',
            type: 'string',
        },
    ]
}