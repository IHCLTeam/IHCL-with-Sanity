export default {
    name: 'newsLetter',
    title: 'News Letter',
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
            name: 'newsButton',
            title: 'Button',
            type: 'string',
        },
    ]
}