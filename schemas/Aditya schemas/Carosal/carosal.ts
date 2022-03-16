export default {
  name: "carosalImages",
  title: "carosalImages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "carosalImage",
      title: "carosalImage",
      type: "image",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
  ],
  preview: {
    select: {
      title: 'title',
      media :'carosalImage'
    }
  }

};
