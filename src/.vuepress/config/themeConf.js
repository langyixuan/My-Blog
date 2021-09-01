/**
 * 博客的主题相关配置
 */

module.exports = {
  base: '',
  repo: 'langyixuan/My-Blog',
  logo: '/images/icon.jpg',
  docsDir: 'src',
  editLinks: true,
  lastUpdated: true,
  personalInfo: {
      name: "Yixuan Lang",
      avatar: "/images/icon.jpg",
      description: [
         '<当你有时间去提升自己时，就别总想着证明自己/>'
      ],
      sns: {
          github: 'https://github.com/langyixuan',
          email: 'langyixuan890@gmail.com',
          customize: [
              {
                  icon: 'ri-bilibili-fill',
                  link: 'https://space.bilibili.com/191823311'
              },
              {
                  icon: 'ri-netease-cloud-music-fill',
                  link: 'https://music.163.com/#/user/home?id=416843684'
              }
          ]
      }
  },
  // 配置首页图片
  // homeHeaderImages: false,
  homeHeaderImages: [
      {
          "path": '/images/home-bg/6.gif',
      },
      {
          "path": '/images/home-bg/8.gif',
      },
      {
          "path": '/images/home-bg/3.gif',
      },
      {
          "path": '/images/home-bg/4.gif',
      },
  ],
  // 配置导航栏
  nav: [
      {
          text: '主页',
          icon: 'ri-home-wifi-fill',
          link: '/'
      },
      {
          text: '标签',
          icon: 'bi-tag-fill',
          link: '/tags/'
      },
      {
          text: '链接',
          icon: 'ri-links-fill',
          link: '/links/'
      },
      {
          text: '哔哔',
          icon: 'ri-message-2-fill',
          link: '/bb/'
      },
      {
          text: '文档',
          icon: 'ri-book-2-fill',
          items: [
              {
                  text: 'Photinia',
                  link: '/docs/photinia/',
              },
              {
                  text: 'rightmenu',
                  link: '/docs/vuepress-plugin-rightmenu/'
              },
          ]
      },
      {
          text: '关于',
          icon: 'bi-person-circle',
          link: '/about/'
      }
  ],
  // 配置侧边栏
  sidebar: {
      '/docs/vuepress-plugin-rightmenu/': [
          {
              title: '基础',
              collapsable: false,
              children: [
                  '',
                  'basic/installation',
                  'basic/behavior',
                  'basic/configuration'
              ]
          },
          {
              title: '开发',
              collapsable: false,
              children: [
                  'develop/todo'
              ]
          }
      ],
      '/docs/photinia/': [
          {
              title: '基础',
              collapsable: false,
              children: [
                  '',
                  'basic/installation'
              ]
          }
      ],
      '/notes/dart/': [
          {
              title: '基础',
              collapsable: false,
              children: [
                  ''
              ]
          }
      ]
  },
  pages: {
      tags: {
          subtitle: '哟呼，这里是标签页~',
          bgImage: {
              path: 'https://static.monknow.com/newtab/wallpaper/cf6fd3d54ca792b0dbc61983a5fa5e2a.jpg'
          }
      },
      links: {
          subtitle: '记录一些常用的链接~',
          bgImage: {
              path: '/images/links/links-bg.gif'
          }
      },
      bb: {
          subtitle: '记录生活琐事',
          bgImage: {
              path: 'https://static.monknow.com/newtab/wallpaper/c44de9f778cfd4b199c77558edc4c368.jpg'
          }
      }
    },
  // 阅读时长估计
  readingTime: {
      wordsPerMinuteCN: 600,
      wordsPerMinuteEN: 300
    },
  // 首页一言气泡
  hitokoto: true,
  // 开启搜索功能
  searchIcon: 'ri-search-2-line',
  // 一键启用markdown语法的脚注和高亮标记功能
  mdPlus: {
    all: true, // 全部启用
    },
  // 页面脚注
  footer: `
  &copy;<a href="https://github.com/langyixuan" target="_blank"> Yixuan Lang</a> 💖 2020-2021
  <br>
  Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
  <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
  `
}