
module.exports = {
  title: '思知', //网站标题
  description: '思知文档中心',
  lang: 'zh-CN',
  base: '/docs/',

  themeConfig: {
    logo: 'img/favicon.ico',
    
    // 展示搜索框
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api']
      }
    },
    nav: [
      {
        text: '学习文档',
        link: '',
        items: [
          {
            text: 'AI机器人开放平台',
            link: 'https://console.ownthink.com/',
          }
        ]
      },
      {
        text: '产品服务',
        link: '/bot',
        items: [
          {
            text: 'AI机器人开放平台',
            link: 'https://console.ownthink.com/',
          },
          {
            text: '思知知识图谱平台',
            link: 'https://kg.sizhi.com/',
          },
          {
            text: '思知认知搜索引擎',
            link: 'https://www.sizhi.com/',
          },
          {
            text: '知情违法情报平台',
            link: 'https://ci.sizhi.com/',
          },
          {
            text: '违法反制监测系统',
            link: 'https://cm.sizhi.com/',
          },
          {
            text: '人工智能标注系统',
            link: 'https://da.sizhi.com/',
          },
          {
            text: '可视化无代码平台',
            link: 'https://hp.sizhi.com/',
          }
        ]
      },
      {
        text: '社区生态',
        link: '',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/ownthink',
          },
          {
            text: 'Gitee',
            link: 'https://gitee.com/ownthink'
          }
        ]
      },
    ],
    sidebar: {
      '/': getDemoSidebar(),
    }
  },
}
  
  function getDemoSidebar() {
    return [
      {
        text: "介绍"
      },
      {
        text: "更新日志",
        children: [{
          text: "新特性",
          link: "/components/log/"
        }]
      },
      {
        text: "开发指南",
        children: [{
          text: "安装"
        }]
      },
      {
        text: "快速开始",
        link: "/"
      },
      {
        text: "基础组件",
        children: [{
            text: "Button 按钮",
            link: "/components/button/"
          },
          {
            text: "Icon 图标",
            link: "/components/icon/"
          },
        ],
      },
      {
        text: "配置组件",
      },
      {
        text: "Form 表单组件",
      },
      {
        text: "Data 数据展示",
      },
    ]
}

  