export default {
    title: 'Movie',
    name: 'movie',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'subtitle',
            title: 'Sub-Title',
            type: 'string'
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
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image'
        },
        {
            title: 'Heading',
            name: 'heading',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        }
    ]
}