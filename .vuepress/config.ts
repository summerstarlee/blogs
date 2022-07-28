
const {defaultTheme} = require("@vuepress/theme-default")

module.exports = {
    base: "/blogs/",
    title: "",
    description: "Just code",
    dest: 'dist',
    head: [
        ['link', { rel: 'icon', href: '/android-icon-36x36.png' }]
    ], 
    markdown: {
      lineNumbers: true
    },
    theme: defaultTheme({
      repo: 'summerstarlee/blogs', 
      lastUpdated: 'Last Updated', 
      sidebarDepth: 2,
      serviceWorker: {
        updatePopup: true
      }, 
      navbar: [
        {
          text: '前端工程化',
          link: '/engineering/',
        },
        {
          text: "读书笔记",
          children: [
            {
              text: "前端架构与工程",
              link: "/frontFrameworkEngineering/"
            }
          ]
        }
      ], 
      sidebar: {
        '/engineering/': [
          '',
          'git-commit',
          'vs-eslint',
          'babel',
          'prettier',
          'npm_change_registry',
          'npm_1',
          'standard-version',
          'monitor_system'
        ],
        '/frontFrameworkEngineering/': [
          "",
        ]
      }
    })

  }
  
  
  
  