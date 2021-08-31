/**
 * 博客使用的相关插件
 */
const { resolve } = require('path');
module.exports = {
  // vssue评论插件
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github-v4',
    // 其他的 Vssue 配置
    owner: 'langyixuan',
    repo: 'My-Blog',
    clientId: 'c95ee043de59ec25b149',
    clientSecret: 'f5754e3630d513408092b27b9ab8c7c3d3d55819',
  },


  // 鼠标右键显示菜单插件
  '@zolyn/rightmenu': {
    config: resolve(__dirname, './rightmenu.js')
  },


  // 提供rss支持
  '@renovamen/rss': {
    site_url: 'https://langyixuan.github.io/',
    copyright: 'YixuanLang 2020-2021',
    count: 20
  },


  // markdown增强功能
  // [Markdown Enhance]: https://vuepress-theme-hope.github.io/md-enhance/zh/guide/mark/
  'md-enhance': {
    // mark: true,
    lineNumbers: false,
    align: true,
    sup: true,
    sub: true,
    footnote: true,
    tasklist: true,
  },
  

  // 让页面图像支持预览，缩放，共享，滑动查看和下载的插件
  'photo-swipe': {
    container: '.theme-content',
    selector: '.theme-content :not(a) > img'
  },
  // '@vuepress/last-updated': {
  //     transformer: (timestamp) => moment(timestamp).add(8, 'h').format('YYYY-MM-DD HH:mm:ss A')
  // },
  // '@zolyn/waline': {
  //     plugin: {
  //         debug: true
  //     },
  //     comment: {
  //         el: '#comment-wrapper',
  //         serverURL: 'https://blog-comment.zorinchan.icu',
  //         dark: 'body[data-theme="dark"]'
  //     }
  // },
  // 
  // 'bbtalk': {
  //     plugin: {
  //         parentNode: '.bb-wrapper',
  //         debug: true
  //     },
  //     bbtalk: {
  //         el: '#bb-container',
  //         appId: 'WMBurIyzzk8G2p4NXePaU4ST-MdYXbMMI',
  //         appKey: 'TR9l0MkO7qitrFh1zd9PvycR',
  //         serverURLs: 'https://wmburiyz.api.lncldglobal.com'
  //     }
  // },
  
  // '@mr-hope/pwa': {
  //     favicon: '/icon-192.png',
  //     themeColor: '#377bb5',
  //     cachePic: true,
  //     maxSize: 2560,
  //     maxPicSize: 2048,
  //     manifest: {
  //         icons: [
  //             {
  //                 src: '/icon-192.png',
  //                 sizes: '192x192',
  //                 type: 'image/png'
  //             },
  //             {
  //                 src: '/icon-512.png',
  //                 sizes: '512x512',
  //                 type: 'image/png'
  //             }
  //         ]
  //     },
  //     apple: {
  //         icon: '/icon-192.png',
  //         maskIcon: '/icon-192.png'
  //     },
  //     msTile: {
  //         image: '/icon-192.png'
  //     }
  // },
  // '@mr-hope/copy-code': {
  //     selector: '.theme-content div[class*="language-"] pre'
  // },

}