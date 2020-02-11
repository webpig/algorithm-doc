module.exports = {
    title: '数据结构与算法',
    description: '基本的数据结构与算法',
    themeConfig: {
        lastUpdated: 'Last Updated',
        sidebarDepth: 1,
        smoothScroll: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' }
        ],
        sidebar: {
            '/guide/': getGuideSidebar('指南', '数据结构', '算法')
        }
    }
}

function getGuideSidebar (GroupA, GroupB, GroupC) {
    const baseURLOfDataStructure = 'data-structure/'
    const baseURLOfAlgorithm = 'algorithm/'
    const dataStructurePaths = ['array', 'linked-list', 'stack', 'queue']
    const algorithmPaths = ['binary-search']
    const childrenOfDataStructure = dataStructurePaths.map(item => baseURLOfDataStructure + item)
    const childrenOfAlgorithm = algorithmPaths.map(item => baseURLOfAlgorithm + item)

    return [
        {
            title: GroupA,
            collapsable: false,
            children: [
                '',    
            ]
        },
        {
            title: GroupB,
            collapsable: false,
            children: childrenOfDataStructure
        },
        {
            title: GroupC,
            collapsable: false,
            children: childrenOfAlgorithm
        }
    ]
}