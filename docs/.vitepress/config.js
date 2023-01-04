import { defineConfig } from 'vitepress'

export default{
    title: '夕夜Craft',
    lastUpdated: true,
  themeConfig: {
    logo: 'https://tangbao-1301296093.cos.ap-shanghai.myqcloud.com/xiye/docs/imag/docs/token.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '新手教程', link: '/course/base.md' },
      { text: '加入游戏', link: '/join-game/info.md' },
      { text: '更新日志', link: '/update-logs/server.md' },
      { text: '玩家须知', link: '/rules/agreement.md'},
      { text: '支持', link: '/support/index.md'}
    ],
    sidebar: {
      '/course/': [
        {
          text: '新手教程',
          items: [
            // This shows `/guide/index.md` page.
            { text: '小技巧', link: '/course/base.md' }, // /guide/index.md
            { text: '酿酒', link: '/course/brewery.md' }, // /guide/one.md
            { text: 'mcMMO', link: '/course/mcmmo.md' }, // /guide/two.md
            { text: '枪械', link: '/course/crackshot.md' },
            { text: '圈地用法', link: '/course/residence.md' },
            { text: '高级附魔', link: '/course/advancedenchantments.md' },
            { text: '关于顶贴', link: '/course/mcbbs.md' }
          ]
        }
      ],
      '/join-game/': [
        {
          text: '加入游戏',
          items: [
            // This shows `/guide/index.md` page.
            { text: '信息', link: '/join-game/info.md' }, // /guide/index.md
            { text: '客户端', link: '/join-game/client.md' }, // /guide/one.md
            { text: '材质包', link: '/join-game/resourcepack.md' }, // /guide/two.md
            { text: '进服帮助', link: '/join-game/help.md' }
          ]
        }
      ],
      '/update-logs/': [
        {
          text: '更新日志',
          items: [
            // This shows `/guide/index.md` page.
            { text: '服务器', link: '/update-logs/server.md' }, // /guide/index.md
            { text: '普通版客户端', link: '/update-logs/client-C.md' }, // /guide/one.md
            { text: '沉浸版客户端', link: '/update-logs/client-I+C.md' } // /guide/two.md
          ]
        }
      ],
      '/rules/': [
        {
          text: '更新日志',
          items: [
            // This shows `/guide/index.md` page.
            { text: '玩家守则', link: '/rules/agreement.md' }, // /guide/index.md
            { text: '作弊的定义', link: '/rules/cheat.md' } // /guide/one.md
          ]
        }
      ]
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    algolia: {
      appId: 'KK0D8LN65A',
      apiKey: '2698e86a3376f9cc712c97f38edb7fe0',
      indexName: 'ENCMC_Docs',
      searchParameters: {
        faeFilters: ['']
      }
    }
  }
}
