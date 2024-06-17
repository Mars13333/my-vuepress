import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {navbar} from './navbar/navbar.ts'
import {sidebar} from "./sidebar/sidebar";

export default defineUserConfig({
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]], // 左上角logo
    lang: 'zh-CN',
    theme: defaultTheme({
        repo: 'mars13333/my-vuepress',
        logo: 'comet.png', //文件在public文件夹内
        locales: {
            '/': {
                navbar: navbar,
                sidebar: sidebar,
            }
        },

        notFound: ['网页走丢了...', '没找到...'],
        backToHome: '返回首页ABC'
    }),
    bundler: viteBundler(),
})
