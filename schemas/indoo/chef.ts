export default {
    name: 'cap',
    title: 'cap',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'name',
            type: 'string',
        },

        
        {
            name: 'imgchef',
            title: 'imgchef',
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
            name: 'descriptions',
            title: 'descriptions',
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
            name: 'button',
            title: 'button',
            type: 'string',
          },

       
    ],
}