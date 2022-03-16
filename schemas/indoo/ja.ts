export default {
    name: 'ja',
    title: 'ja',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string',
        },
        {
            name: 'description1',
            title: 'description1',
            type: 'text',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        },

        {
            name: 'imgj',
            title: 'imgj',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'title',
            type: 'string',
          },
        {
            name: 'description2',
            title: 'description2',
            type: 'text',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        },

       
    ],

 }

