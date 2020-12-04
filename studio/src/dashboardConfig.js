export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fca1fabec3ed7d55681af50',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ydgv4i8t',
                  apiId: '89ce7e50-3077-47cc-a615-aebd6641586e'
                },
                {
                  buildHookId: '5fca1fab15c6fae797e8456b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-28392pt2',
                  apiId: '3eb346df-4d92-4490-aba3-1a9721cd8f3d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ikany/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-28392pt2.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
