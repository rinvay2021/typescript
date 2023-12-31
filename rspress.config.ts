import { defineConfig } from 'rspress/config'

export default defineConfig({
    root: 'docs',
    title: 'ts',
    base: '/typescript',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968421.png',
    logo: {
        dark: 'https://www.endpointdev.com/blog/2021/02/intro-to-typescript/ts-lettermark-white.svg',
        light: 'https://camo.githubusercontent.com/e0006a1bf723541f065116ce508b54dd9cb90e7229fb19a7ac7aad1a0bfb999e/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f747970657363726970742e737667',
    },
    themeConfig: {
        socialLinks: [
            {
                icon: 'github',
                mode: 'link',
                content: 'https://github.com/rinvay2021/typescript',
            },
        ],
    },
})
