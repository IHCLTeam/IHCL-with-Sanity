export default {
    name: 'featuresInfo',
    title: 'Features Info',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
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
            name: 'details',
            title: 'Datails Button',
            type: 'string',
        },

    ]
}