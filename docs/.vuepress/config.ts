import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-tw',
  title: '共樂居護所',
  description: '共樂生活股份有限公司附設嘉義縣私立共樂居家',
  theme: defaultTheme({
    navbar: [
      {
        text: '最新消息',
        link: '/news',
      },
      {
        text: '認識我們',
        link: '/us',
      },
      {
        text: '服務內容',
        link: '/service',
      },
      {
        text: '聯絡我們',
        link: '/contact',
      },
    ],
    
  }),
})
