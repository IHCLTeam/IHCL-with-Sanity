export default {
  name: "carosalOne",
  title: "carosalOne",
  type: "document",
  fields: [
    {
      name: "image",
      title: "image",
      type: "image",
    },
    {
      name: 'description',
      title: 'description',
      type: 'text',
      of: [
        {
          title: 'Block',
          type: 'block',
          lists: [],
        },
      ],
    },	
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
