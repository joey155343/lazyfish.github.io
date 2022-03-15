module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/BlogVuePress/',
    theme: "reco",
    themeConfig: {
        //導航欄
        nav: [
            { text: 'Home', link: '/', icon: 'reco-home' },  //text:導航標題內容，icon：圖示樣式
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            {
                text: 'Docs',
                icon: 'reco-message',
                items: [
                    { text: 'vuepress-reco', link: '/docs/theme-reco/' }  //item： 子導航
                ]
            },
            {
                text: 'Contact',
                icon: 'reco-message',
                items: [
                    { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' }
                ]
            }
        ],
        sidebar: {
            '/StockProfolioDocs/': [
                '/StockProfolioDocs/',
                '/StockProfolioDocs/Category_1/',
                {
                    title: '類別2',
                    path: '/StockProfolioDocs/Category_2',
                    children: [
                        '/StockProfolioDocs/Category_2/test1.md',
                        '/StockProfolioDocs/Category_2/test2.md',
                    ]
                }
            ],
        }
    }
}