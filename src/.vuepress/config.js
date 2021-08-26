/**
 * 博客配置文件
 */   
//  const moment = require('moment');
const themeConfig = require('./config/themeConf.js');
const plugins = require('./config/plugin.js')

module.exports = {
    // 部署站点的基础路径
    base: '',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    title: 'Yixuan Lang',
    description: 'Personal Blog',
    // SEO优化
    head: [
        ['link', { rel: 'icon', href: '/images/icon.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    ],
    // 配置当前主题
    themeConfig,
    plugins
}