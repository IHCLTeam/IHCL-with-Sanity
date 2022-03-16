export default {
    name: 'puneet',
    title: 'puneet',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'title',
        type: 'string',
      },
      {
        name: 'title2',
        title: 'title2',
        type: 'string',
      },
  
     
        {
        name: 'img',
        title: 'img',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'description',
        type: 'text',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{title: 'Normal', value: 'normal'}],
            lists: [],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }
  