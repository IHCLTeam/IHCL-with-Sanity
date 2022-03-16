export default {
    name: 'ihcl',
    title: 'ihcl',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string',
        },

        //   {
        //     name: 'slug',
        //     title: 'slug',
        //     type: 'slug',
        //     options: {
        //       source: 'name',
        //       maxLength: 96,
        //     },
        //   },
        {
            name: 'imagee',
            title: 'imagee',
            type: 'image',
            options: {
                hotspot: true,
            },
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

       
    ],

 }

