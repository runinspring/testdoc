export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "disableDarkMode": true,
    "navbar": {
      "title": "Egret Feather",
      "logo": {
        "alt": "Egret Feather Logo",
        "src": "img/logo.png"
      },
      "links": [
        {
          "to": "https://egret.com/products",
          "label": "返回产品中心",
          "position": "right"
        }
      ]
    },
    "footer": {
      "links": [
        {
          "title": "开源项目",
          "items": [
            {
              "label": "白鹭引擎源码",
              "to": "https://github.com/egret-labs/egret-core"
            },
            {
              "label": "第三方库",
              "to": "https://github.com/egret-labs/egret-game-library"
            },
            {
              "label": "代码示例",
              "to": "https://github.com/egret-labs/egret-examples"
            },
            {
              "label": "更多开源项目",
              "to": "https://github.com/egret-labs"
            }
          ]
        },
        {
          "title": "产品相关",
          "items": [
            {
              "label": "下载引擎",
              "href": "https://docs.egret.com/engine"
            },
            {
              "label": "文档中心",
              "href": "http://developer.egret.com"
            }
          ]
        },
        {
          "title": "获得帮助",
          "items": [
            {
              "label": "论坛技术问答",
              "to": "http://bbs.egret.com/forum-94-1.html"
            },
            {
              "label": "技术支持：support@egret.com",
              "href": ""
            }
          ]
        }
      ],
      "copyright": "Copyright © 2014-2020 Egret Technology"
    }
  },
  "title": "Egret Feather",
  "tagline": "Egret Feather Docs",
  "url": "https://runinspring.github.io/testdoc/",
  "baseUrl": "/testdoc/",
  "favicon": "img/favicon.ico",
  "organizationName": "runinspring",
  "projectName": "testdoc",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/zhangyu/jeff/git/egret-work/testdoc/sidebars.js"
        },
        "theme": {
          "customCss": "/Users/zhangyu/jeff/git/egret-work/testdoc/src/css/custom.css"
        }
      }
    ]
  ]
};