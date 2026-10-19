import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Helpers Hub',
  description: 'Metadata-first reusable helpers catalog',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Checklist', link: '/checklist' }
    ],
    search: { provider: 'local' },
    sidebar: {
      '/': [
        { text: 'Bắt đầu', items: [
          { text: 'Giới thiệu', link: '/' },
          { text: 'Conventions', link: '/conventions' },
          { text: 'Checklist', link: '/checklist' }
        ]},
        { text: 'Catalog', items: [
          { text: 'String', link: '/string/' },
          { text: 'Number & Format', link: '/number/' },
          { text: 'Array / Collection', link: '/array/' },
          { text: 'Object', link: '/object/' },
          { text: 'Date / Time', link: '/date/' },
          { text: 'Validation', link: '/validation/' },
          { text: 'Async / Function', link: '/async/' },
          { text: 'URL / HTTP', link: '/url/' },
          { text: 'Error / Result', link: '/error/' },
          { text: 'Security / ID', link: '/security/' },
          { text: 'Browser / DOM', link: '/browser/' },
          { text: 'Config / Logging', link: '/config/' }
        ]}
      ]
    }
  }
});
