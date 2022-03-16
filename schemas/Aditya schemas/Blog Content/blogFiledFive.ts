    export default {
        name : 'Disclosures',
        title : 'Disclosures',
        type : 'document',
        fields : [
            {
                name : 'title',
                title : 'Title',
                type : 'string',
            },
            {
                name : 'header',
                title : 'header',
                type : 'string',
            },
            { 
               name : 'cOne',
               title : 'cOne',
               type : 'string',
              },
              { 
               name : 'cTwo',
               title : 'cTwo',
               type : 'string',
              },
              { 
               name : 'cThree',
               title : 'cThree',
               type : 'string',
              },
              { 
               name : 'cFour',
               title : 'cFour',
               type : 'string',
              },
              { 
               name : 'cFive',
               title : 'cFive',
               type : 'string',
              },
              { 
               name : 'cSix',
               title : 'cSix',
               type : 'string',
              },
              
        ],
        preview: {
            select: {
              title: 'title',
            }
          }
    }