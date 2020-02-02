export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e3616e6cf425891b9de005f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages2-studio-ziy254jq',
                  apiId: '0c43bff0-b45e-4a00-a3c8-2b3dd6c3c230'
                },
                {
                  buildHookId: '5e3616e62dc111e8b5ba460c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages2-web-3x5hieu7',
                  apiId: 'd8ddcd96-d752-45b3-967f-615aa3562c21'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages2-web-3x5hieu7.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
