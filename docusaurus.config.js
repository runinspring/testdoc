module.exports = {
  title: 'Egret Feather',
  tagline: 'Egret Feather Docs',
  url: 'https://runinspring.github.io',
  baseUrl: '/testdoc/',
  favicon: 'img/favicon.ico',
  organizationName: 'runinspring', // Usually your GitHub org/user name.
  projectName: 'testdoc', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,//关闭黑暗模式的开关
    navbar: {
      title: 'Egret Feather',
      logo: {
        alt: 'Egret Feather Logo',
        src: 'img/logo.png',
      },
      links: [
        // {to: 'docs/update/update1.2.2', label: '文档', position: 'right'},
        // {to: 'docs/api/particle.GravityParticle', label: 'API', position: 'right'},
        { to: 'https://egret.com/products', label: '返回产品中心', position: 'right' },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: '开源项目',
          items: [
            {
              label: '白鹭引擎源码',
              to: 'https://github.com/egret-labs/egret-core',
            },
            {
              label: '第三方库',
              to: 'https://github.com/egret-labs/egret-game-library',
            },
            {
              label: '代码示例',
              to: 'https://github.com/egret-labs/egret-examples',
            },
            {
              label: '更多开源项目',
              to: 'https://github.com/egret-labs',
            },
          ],
        },
        {
          title: '产品相关',
          items: [
            {
              label: '下载引擎',
              href: 'https://docs.egret.com/engine',
            },
            {
              label: '文档中心',
              href: 'http://developer.egret.com',
            }
          ],
        },
        {
          title: '获得帮助',
          items: [
            {
              label: '论坛技术问答',
              to: 'http://bbs.egret.com/forum-94-1.html',
            },
            {
              label: '技术支持：support@egret.com',
              href: '',
            },
          ],
        },
      ],
      copyright: `Copyright © 2014-${new Date().getFullYear()} Egret Technology`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
