
export default {
        title: 'video',
        name: "videoBlogPost",
        type: "document",
        fields: [
            {
                name: 'title',
                title: 'Title',
                type: 'string',
              },
              {
                name: 'slug',
                title: 'Slug',
                type: 'slug',
                options: {
                  source: 'title',
                  maxLength: 96,
                },
              },
          {
            name: 'fallback',
            title: 'Fallback format',
            type: 'file',
            options: {
              accept: 'video/mp4'
            }
            
          },
        ]
      }
