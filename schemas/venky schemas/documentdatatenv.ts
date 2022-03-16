export default {
    name: 'brands',
    title: 'Brands',
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
                source: 'title'
            }
        },
        {
            name: 'copyright',
            title: 'Copyright',
            type: 'string',
        },
        {
            name: 'taj',
            title: 'Taj',
            type: 'string',
        },
        {
            name: 'seleqtions',
            title: 'SeleQtions',
            type: 'string',
        },
        {
            name: 'vivanta',
            title: 'Vivanta',
            type: 'string',
        },
        {
            name: 'ginger',
            title: 'Ginger',
            type: 'string',
        },
        {
            name: 'ama',
            title: 'Ama',
            type: 'string',
        },
        {
            name: 'qmin',
            title: 'Qmin',
            type: 'string',
        },
        {
            name: 'tajsats',
            title: 'Tajsats',
            type: 'string',
        },
    ]
}