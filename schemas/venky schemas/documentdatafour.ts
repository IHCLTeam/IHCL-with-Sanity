export default {
    name: 'avatar',
    title: 'Avatar',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Sub Title',
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
            name: 'info',
            title: 'Info',
            type: 'string',
        },
        {
            name: 'information',
            title: 'Information',
            type: 'string',
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
        },
        {
            name: 'day',
            title: 'Day',
            type: 'string',
        },
        {
            name: 'market',
            title: 'Market',
            type: 'string',
        },
        {
            name: 'cities',
            title: 'Cities',
            type: 'number',
        },
        {
            name: 'days',
            title: 'Days',
            type: 'number',
        },
        {
            name: 'markets',
            title: 'Markets',
            type: 'number'
        },
    ]
}