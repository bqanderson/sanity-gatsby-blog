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
                  buildHookId: '5fd989385ac17c2bcb70fce4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-svssvck5',
                  apiId: 'db2af7fb-d416-4d57-8f23-e4be2e05205c'
                },
                {
                  buildHookId: '5fd98938f09e84311db13fea',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-k3smabtg',
                  apiId: '7c0f024e-7e29-47d2-9cea-43de257cac83'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bqanderson/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-k3smabtg.netlify.app', category: 'apps' }
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
