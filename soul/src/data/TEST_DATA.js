'use strict'
const TEST_DATA = {
    "marking": [
        // 纬度90
        {
            "pos": [
                0,
                90
            ],
            "name": 'yuli',
            "id": '0',
            "move": true,
        },
        // 纬度60
        {
            "pos": [
                180,
                60
            ],
            "name": 'nibu',
            "id": '1',
            "move": true,
        },
        {
            "pos": [
                150,
                60
            ],
            "name": 'yizhud',
            "id": '2',
            "move": true,
        },
        {
            "pos": [
                120,
                60
            ],
            "name": 'guide',
            "id": '3',
            "move": true,
        },
        {
            "pos": [
                90,
                60
            ],
            "name": 'bianbian',
            "id": '4',
            "move": true,
        },
        {
            "pos": [
                60,
                60
            ],
            "name": 'haoer',
            "id": '5',
            "move": true,
        },
        {
            "pos": [
                30,
                60
            ],
            "name": 'douzi',
            "id": '6',
            "move": true,
        },
        {
            "pos": [
                0,
                60
            ],
            "name": 'duoduo',
            "id": '7',
            "move": true,
        },
        {
            "pos": [
                -30,
                60
            ],
            "name": 'meili',
            "id": '8',
            "move": true,
        },
        {
            "pos": [
                -60,
                60
            ],
            "name": 'huer',
            "id": '9',
            "move": true,
        },
        {
            "pos": [
                -90,
                60
            ],
            "name": 'keren',
            "id": '10',
            "move": true,
        },
        {
            "pos": [
                -120,
                60
            ],
            "name": 'dongni',
            "id": '11',
            "move": true,
        },
        {
            "pos": [
                -150,
                60
            ],
            "name": 'gege',
            "id": '12',
            "move": true,
        },
        {
            "pos": [
                -180,
                60
            ],
            "name": 'huahua',
            "id": '13',
            "move": true,
        },

        // 纬度40
        {
            "pos": [
                180,
                40
            ],
            "name": 'aiyi',
            "id": '14',
            "move": true,
        },
        {
            "pos": [
                160,
                40
            ],
            "name": 'loiu',
            "id": '15',
            "move": true,
        },
        {
            "pos": [
                140,
                40
            ],
            "name": 'oiui',
            "id": '16',
            "move": true,
        },
        {
            "pos": [
                120,
                40
            ],
            "name": 'enhakd',
            "id": '17',
            "move": true,
        },
        {
            "pos": [
                100,
                40
            ],
            "name": 'Apouijn',
            "id": '18',
            "move": true,
        },
        {
            "pos": [
                80,
                40
            ],
            "name": 'huawei',
            "id": '19',
            "move": true,
        },
        {
            "pos": [
                60,
                40
            ],
            "name": 'zhikeer',
            "id": '20',
            "move": true,
        },
        {
            "pos": [
                40,
                40
            ],
            "name": 'zuodong',
            "id": '21',
            "move": true,
        },
        {
            "pos": [
                20,
                40
            ],
            "name": 'baiti',
            "id": '22',
            "move": true,
        },
        {
            "pos": [
                0,
                40
            ],
            "name": 'sdfA',
            "id": '23',
            "move": true,
        },
        {
            "pos": [
                -180,
                40
            ],
            "name": 'bibi',
            "id": '24',
            "move": true,
        },
        {
            "pos": [
                -160,
                40
            ],
            "name": 'fgA',
            "id": '25',
            "move": true,
        },
        {
            "pos": [
                -140,
                40
            ],
            "name": 'hA',
            "id": '26',
            "move": true,
        },
        {
            "pos": [
                -120,
                40
            ],
            "name": 'kA',
            "id": '27',
            "move": true,
        },
        {
            "pos": [
                -100,
                40
            ],
            "name": 'huaer',
            "id": '28',
            "move": true,
        },
        {
            "pos": [
                -80,
                40
            ],
            "name": 'gA',
            "id": '29',
            "move": true,
        },
        {
            "pos": [
                -60,
                40
            ],
            "name": 'yA',
            "id": '30',
            "move": true,
        },
        {
            "pos": [
                -40,
                40
            ],
            "name": 'likang',
            "id": '31',
            "move": true,
        },
        {
            "pos": [
                -20,
                40
            ],
            "name": 'uA',
            "id": '32',
            "move": true,
        },

        // 纬度20
        {
            "pos": [
                180,
                20
            ],
            "name": 'fgh',
            "id": '33',
            "move": true,
        },
        {
            "pos": [
                160,
                20
            ],
            "name": 'quhuachao',
            "id": '34',
            "move": true,
        },
        {
            "pos": [
                140,
                20
            ],
            "name": 'dingweier',
            "id": '35',
            "move": true,
        },
        {
            "pos": [
                120,
                20
            ],
            "name": 'fig',
            "id": '36',
            "move": true,
        },
        {
            "pos": [
                100,
                20
            ],
            "name": 'buyaodeng',
            "id": '37',
            "move": true,
        },
        {
            "pos": [
                80,
                20
            ],
            "name": 'olA',
            "id": '38',
            "move": true,
        },
        {
            "pos": [
                60,
                20
            ],
            "name": 'ghjkA',
            "id": '39',
            "move": true,
        },
        {
            "pos": [
                40,
                20
            ],
            "name": 'fgghd',
            "id": '40',
            "move": true,
        },
        {
            "pos": [
                20,
                20
            ],
            "name": 'sfgkd',
            "id": '41',
            "move": true,
        },
        {
            "pos": [
                0,
                20
            ],
            "name": 'rthuaer',
            "id": '42',
            "move": true,
        },
        {
            "pos": [
                -180,
                20
            ],
            "name": 'sdfok',
            "id": '43',
            "move": true,
        },
        {
            "pos": [
                -160,
                20
            ],
            "name": 'xvzhizhi',
            "id": '44',
            "move": true,
        },
        {
            "pos": [
                -140,
                20
            ],
            "name": 'yurttu',
            "id": '45',
            "move": true,
        },
        {
            "pos": [
                -120,
                20
            ],
            "name": 'sdf',
            "id": '46',
            "move": true,
        },
        {
            "pos": [
                -100,
                20
            ],
            "name": 'try',
            "id": '47',
            "move": true,
        },
        {
            "pos": [
                -80,
                20
            ],
            "name": 'yufg',
            "id": '48',
            "move": true,
        },
        {
            "pos": [
                -60,
                20
            ],
            "name": 'sdf',
            "id": '49',
            "move": true,
        },
        {
            "pos": [
                -40,
                20
            ],
            "name": 'sfdxcv',
            "id": '50',
            "move": true,
        },
        {
            "pos": [
                -20,
                20
            ],
            "name": 'sdf',
            "id": '51',
            "move": true,
        },


        // 纬度0
        {
            "pos": [
                180,
                0
            ],
            "name": 'shuietr',
            "id": '52',
            "move": true,
        },
        {
            "pos": [
                160,
                0
            ],
            "name": 'df',
            "id": '53',
            "move": true,
        },
        {
            "pos": [
                140,
                0
            ],
            "name": 'dsf',
            "id": '54',
            "move": true,
        },
        {
            "pos": [
                120,
                0
            ],
            "name": 'sdbibi',
            "id": '55',
            "move": true,
        },
        {
            "pos": [
                100,
                0
            ],
            "name": 'wuming',
            "id": '56',
            "move": true,
        },
        {
            "pos": [
                80,
                0
            ],
            "name": 'shide',
            "id": '57',
            "move": true,
        },
        {
            "pos": [
                60,
                0
            ],
            "name": 'zain',
            "id": '58',
            "move": true,
        },
        {
            "pos": [
                40,
                0
            ],
            "name": 'nijhg',
            "id": '59',
            "move": true,
        },
        {
            "pos": [
                20,
                0
            ],
            "name": 'buyaodeng',
            "id": '60',
            "move": true,
        },
        {
            "pos": [
                0,
                0
            ],
            "name": 'dongdong',
            "id": '61',
            "move": true,
        },
        {
            "pos": [
                -180,
                0
            ],
            "name": 'mimi',
            "id": '62',
            "move": true,
        },
        {
            "pos": [
                -160,
                0
            ],
            "name": 'fafa',
            "id": '63',
            "move": true,
        },
        {
            "pos": [
                -140,
                0
            ],
            "name": 'liaoliao',
            "id": '64',
            "move": true,
        },
        {
            "pos": [
                -120,
                0
            ],
            "name": 'nana',
            "id": '65',
            "move": true,
        },
        {
            "pos": [
                -100,
                0
            ],
            "name": 'chuer',
            "id": '66',
            "move": true,
        },
        {
            "pos": [
                -80,
                0
            ],
            "name": 'huang',
            "id": '67',
            "move": true,
        },
        {
            "pos": [
                -60,
                0
            ],
            "name": 'hnag',
            "id": '68',
            "move": true,
        },
        {
            "pos": [
                -40,
                0
            ],
            "name": 'sg',
            "id": '69',
            "move": true,
        },
        {
            "pos": [
                -20,
                0
            ],
            "name": 'bianyagn',
            "id": '70',
            "move": true,
        },
        {
            "pos": [
                0,
                90
            ],
            "name": 'dsg',
            "id": '71',
            "move": true,
        },

        // 纬度-60
        {
            "pos": [
                180,
                -60
            ],
            "name": 's',
            "id": '72',
            "move": true,
        },
        {
            "pos": [
                150,
                -60
            ],
            "name": 'huadg',
            "id": '73',
            "move": true,
        },
        {
            "pos": [
                120,
                -60
            ],
            "name": 'dhvb',
            "id": '74',
            "move": true,
        },
        {
            "pos": [
                90,
                -60
            ],
            "name": 'taedeng',
            "id": '75',
            "move": true,
        },
        {
            "pos": [
                60,
                -60
            ],
            "name": 'yiner',
            "id": '76',
            "move": true,
        },
        {
            "pos": [
                30,
                -60
            ],
            "name": 'guniang',
            "id": '77',
            "move": true,
        },
        {
            "pos": [
                0,
                -60
            ],
            "name": 'ert',
            "id": '78',
            "move": true,
        },
        {
            "pos": [
                -30,
                -60
            ],
            "name": 'fade',
            "id": '79',
            "move": true,
        },
        {
            "pos": [
                -60,
                -60
            ],
            "name": 'errism',
            "id": '80',
            "move": true,
        },
        {
            "pos": [
                -90,
                -60
            ],
            "name": 'hukee',
            "id": '81',
            "move": true,
        },
        {
            "pos": [
                -120,
                -60
            ],
            "name": 'feixinag',
            "id": '82',
            "move": true,
        },
        {
            "pos": [
                -150,
                -60
            ],
            "name": 'nikun',
            "id": '83',
            "move": true,
        },
        {
            "pos": [
                -180,
                -60
            ],
            "name": 'xuyu',
            "id": '84',
            "move": true,
        },

        // 纬度-40
        {
            "pos": [
                180,
                -40
            ],
            "name": 'wer',
            "id": '85',
            "move": true,
        },
        {
            "pos": [
                160,
                -40
            ],
            "name": 'liuyuc',
            "id": '86',
            "move": true,
        },
        {
            "pos": [
                140,
                -40
            ],
            "name": 'yuanyuan',
            "id": '87',
            "move": true,
        },
        {
            "pos": [
                120,
                -40
            ],
            "name": 'gf',
            "id": '88',
            "move": true,
        },
        {
            "pos": [
                100,
                -40
            ],
            "name": 'gecan',
            "id": '89',
            "move": true,
        },
        {
            "pos": [
                80,
                -40
            ],
            "name": 'xiaodan',
            "id": '90',
            "move": true,
        },
        {
            "pos": [
                60,
                -40
            ],
            "name": 'kaikai',
            "id": '91',
            "move": true,
        },
        {
            "pos": [
                40,
                -40
            ],
            "name": 'wangduoduo',
            "id": '92',
            "move": true,
        },
        {
            "pos": [
                20,
                -40
            ],
            "name": 'cvva',
            "id": '93',
            "move": true,
        },
        {
            "pos": [
                0,
                -40
            ],
            "name": 'dog',
            "id": '94',
            "move": true,
        },
        {
            "pos": [
                -180,
                -40
            ],
            "name": 'fkme',
            "id": '95',
            "move": true,
        },
        {
            "pos": [
                -160,
                -40
            ],
            "name": 'goodjob',
            "id": '96',
            "move": true,
        },
        {
            "pos": [
                -140,
                -40
            ],
            "name": 'fdsfh',
            "id": '97',
            "move": true,
        },
        {
            "pos": [
                -120,
                -40
            ],
            "name": 'Afg',
            "id": '98',
            "move": true,
        },
        {
            "pos": [
                -100,
                -40
            ],
            "name": 'fgh',
            "id": '99',
            "move": true,
        },
        {
            "pos": [
                -80,
                -40
            ],
            "name": 'gh',
            "id": '100',
            "move": true,
        },
        {
            "pos": [
                -60,
                -40
            ],
            "name": 'fogs',
            "id": '101',
            "move": true,
        },
        {
            "pos": [
                -40,
                -40
            ],
            "name": 'francis',
            "id": '102',
            "move": true,
        },
        {
            "pos": [
                -20,
                -40
            ],
            "name": 'freedom',
            "id": '103',
            "move": true,
        },

        // 纬度-20
        {
            "pos": [
                180,
                -20
            ],
            "name": 'happy',
            "id": '104',
            "move": true,
        },
        {
            "pos": [
                160,
                -20
            ],
            "name": 'goochi',
            "id": '105',
            "move": true,
        },
        {
            "pos": [
                140,
                -20
            ],
            "name": 'lightsky',
            "id": '106',
            "move": true,
        },
        {
            "pos": [
                120,
                -20
            ],
            "name": 'redman',
            "id": '107',
            "move": true,
        },
        {
            "pos": [
                100,
                -20
            ],
            "name": 'mikum',
            "id": '108',
            "move": true,
        },
        {
            "pos": [
                80,
                -20
            ],
            "name": 'nls',
            "id": '109',
            "move": true,
        },
        {
            "pos": [
                60,
                -20
            ],
            "name": 'kiyud',
            "id": '110',
            "move": true,
        },
        {
            "pos": [
                40,
                -20
            ],
            "name": 'fffg',
            "id": '111',
            "move": true,
        },
        {
            "pos": [
                20,
                -20
            ],
            "name": 'fubixuan',
            "id": '112',
            "move": true,
        },
        {
            "pos": [
                0,
                -20
            ],
            "name": 'hujianxing',
            "id": '113',
            "move": true,
        },
        {
            "pos": [
                -180,
                -20
            ],
            "name": 'hutao',
            "id": '114',
            "move": true,
        },
        {
            "pos": [
                -160,
                -20
            ],
            "name": 'zhengshu',
            "id": '115',
            "move": true,
        },
        {
            "pos": [
                -140,
                -20
            ],
            "name": 'tangxiaoyi',
            "id": '116',
            "move": true,
        },
        {
            "pos": [
                -120,
                -20
            ],
            "name": 'dongge',
            "id": '117',
            "move": true,
        },
        {
            "pos": [
                -100,
                -20
            ],
            "name": 'wagnmeng',
            "id": '118',
            "move": true,
        },
        {
            "pos": [
                -80,
                -20
            ],
            "name": 'zhiku',
            "id": '119',
            "move": true,
        },
        {
            "pos": [
                -60,
                -20
            ],
            "name": 'xiaohong',
            "id": '120',
            "move": true,
        },
        {
            "pos": [
                -40,
                -20
            ],
            "name": 'dos',
            "id": '121',
            "move": true,
        },
        {
            "pos": [
                -20,
                -20
            ],
            "name": 'aiyi',
            "id": '122',
            "move": true,
        },
    ]
}

module.exports = TEST_DATA
