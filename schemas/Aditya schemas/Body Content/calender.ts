export default {
    name: 'calender',
    title: 'calender',
    type: 'document',
    fields: [     
      {
        name: 'image',
        title: 'image',
        type: 'image',
      },      
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  };
  