import Mock from 'mockjs'
let debug = 1;
if (debug) {
    Mock.mock(/login/, {
        "data": {
            userId: "@integer(1,10)",
            "userName|1": ["é²ç­ä¸å·", "å¸é¦", "è¡æå§¬", "çæ­å", "å¦²å·±","é "]
        },
        "msg": "Success",
        "status": "YQ-000"
    })
    Mock.mock(/getMenu/, {
        "data": {
            menu: [{
                name: 'é¡¹ç®ç®¡ç',
                name_en: 'Projects',
                router: '',
                icon: 'el-icon-time',
                children: [{
                    name: 'å¼åå¤å¿',
                    name_en: 'Notes',
                    router: '/project-info',
                    icon: 'el-icon-date'
                }, {
                    name: 'å³äºä½è',
                    name_en: 'About',
                    router: '/enroll-list',
                    icon: 'el-icon-document'
                }]
            }, {
                name: 'å¤©æ°é¢æ¥',
                name_en: 'Weather',
                router: '/weather',
                icon: 'el-icon-picture-outline',
                children: []
            }, {
                name: 'é­å¹»ç«æ¹',
                name_en: 'Cube',
                router: '/cube',
                icon: 'el-icon-menu',
                children: []
            }, {
                name: 'æéæµè¯',
                name_en: 'Authority',
                router: '/authority-test',
                icon: 'el-icon-setting',
                children: []
            }]
        },
        "msg": "Success",
        "status": "YQ-000"
    })
}
