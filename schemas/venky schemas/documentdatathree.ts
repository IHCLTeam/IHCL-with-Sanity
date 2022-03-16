export default {
    name: 'author1',
    title: 'Author',
    type: 'document',
    fields: [
        // {
        //     name: 'title',
        //     title: 'Title',
        //     type: 'string',
        // },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'subtitle'
            }
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
        },
        {
            name: 'hotel',
            title: 'Hotel',
            type: 'string',
        },
        {
            name: 'key',
            title: 'Key',
            type: 'string'
        },
        {
            name: 'destination',
            title: 'Destination',
            type: 'string',
        },
        {
            name: 'hotels',
            title: 'Hotels',
            type: 'number',
        },
        {
            name: 'keys',
            title: 'Keys',
            type: 'number',
        },
        {
            name: 'destinations',
            title: 'Destinations',
            type: 'number',
        },
        {
            name: 'info',
            title: 'Info',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ]
}