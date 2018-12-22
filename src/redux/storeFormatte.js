let state = {
    leftNav: {
        itemNames: ['钱包', '行程', '发票', '违章', '设置', '客服'],
        show: false
    },
    topNav: {
        itemNames: ['国内租', '分时共享', '全球租', '专车'],
        active: '国内租'
    },
    Domestic: {
        carousel: {
            urls: [],
            interval: 3000,
            current: 0
        },
        choose: {
            from: {
                city: '广州',
                location: '市桥店',
                way: '上门'
            },
            to: {
                city: '广州',
                location: '市桥店',
                way: '上门'
            }
        },
        links: ['超值套餐', '顺风车', '长租服务', '门店查询', '导航', '帮助中心']
    }
};