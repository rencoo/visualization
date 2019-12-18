'use strict'
const TEST_DATA = {
    "marking": [
        // 纬度90
        {
            "pos": [
                0,
                90
            ],
            "name": 'A',
            "id": '0',
            "move": true,
        },
        // 纬度60
        {
            "pos": [
                180,
                60
            ],
            "name": 'A',
            "id": '1',
            "move": true,
        },
        {
            "pos": [
                150,
                60
            ],
            "name": 'A',
            "id": '2',
            "move": true,
        },
        {
            "pos": [
                120,
                60
            ],
            "name": 'A',
            "id": '3',
            "move": true,
        },
        {
            "pos": [
                90,
                60
            ],
            "name": 'A',
            "id": '4',
            "move": true,
        },
        {
            "pos": [
                60,
                60
            ],
            "name": 'A',
            "id": '5',
            "move": true,
        },
        {
            "pos": [
                30,
                60
            ],
            "name": 'A',
            "id": '6',
            "move": true,
        },
        {
            "pos": [
                0,
                60
            ],
            "name": 'A',
            "id": '7',
            "move": true,
        },
        {
            "pos": [
                -30,
                60
            ],
            "name": 'A',
            "id": '8',
            "move": true,
        },
        {
            "pos": [
                -60,
                60
            ],
            "name": 'A',
            "id": '9',
            "move": true,
        },
        {
            "pos": [
                -90,
                60
            ],
            "name": 'A',
            "id": '10',
            "move": true,
        },
        {
            "pos": [
                -120,
                60
            ],
            "name": 'A',
            "id": '11',
            "move": true,
        },
        {
            "pos": [
                -150,
                60
            ],
            "name": 'A',
            "id": '12',
            "move": true,
        },
        {
            "pos": [
                -180,
                60
            ],
            "name": 'A',
            "id": '13',
            "move": true,
        },

        // 纬度40
        {
            "pos": [
                180,
                40
            ],
            "name": 'A',
            "id": '14',
            "move": true,
        },
        {
            "pos": [
                160,
                40
            ],
            "name": 'A',
            "id": '15',
            "move": true,
        },
        {
            "pos": [
                140,
                40
            ],
            "name": 'A',
            "id": '16',
            "move": true,
        },
        {
            "pos": [
                120,
                40
            ],
            "name": 'A',
            "id": '17',
            "move": true,
        },
        {
            "pos": [
                100,
                40
            ],
            "name": 'A',
            "id": '18',
            "move": true,
        },
        {
            "pos": [
                80,
                40
            ],
            "name": 'A',
            "id": '19',
            "move": true,
        },
        {
            "pos": [
                60,
                40
            ],
            "name": 'A',
            "id": '20',
            "move": true,
        },
        {
            "pos": [
                40,
                40
            ],
            "name": 'A',
            "id": '21',
            "move": true,
        },
        {
            "pos": [
                20,
                40
            ],
            "name": 'A',
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
            "name": 'sdfA',
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
            "name": 'hA',
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
            "name": 'dfA',
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
            "name": 'fghA',
            "id": '33',
            "move": true,
        },
        {
            "pos": [
                160,
                20
            ],
            "name": 'qwA',
            "id": '34',
            "move": true,
        },
        {
            "pos": [
                140,
                20
            ],
            "name": 'sdfA',
            "id": '35',
            "move": true,
        },
        {
            "pos": [
                120,
                20
            ],
            "name": 'fgA',
            "id": '36',
            "move": true,
        },
        {
            "pos": [
                100,
                20
            ],
            "name": 'ioA',
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
            "name": 'fgA',
            "id": '40',
            "move": true,
        },
        {
            "pos": [
                20,
                20
            ],
            "name": 'sfA',
            "id": '41',
            "move": true,
        },
        {
            "pos": [
                0,
                20
            ],
            "name": 'rtA',
            "id": '42',
            "move": true,
        },
        {
            "pos": [
                -180,
                20
            ],
            "name": 'sdfA',
            "id": '43',
            "move": true,
        },
        {
            "pos": [
                -160,
                20
            ],
            "name": 'xvA',
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
            "name": 'sdfA',
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
            "name": 'sdgA',
            "id": '55',
            "move": true,
        },
        {
            "pos": [
                100,
                0
            ],
            "name": 'A',
            "id": '56',
            "move": true,
        },
        {
            "pos": [
                80,
                0
            ],
            "name": 'A',
            "id": '57',
            "move": true,
        },
        {
            "pos": [
                60,
                0
            ],
            "name": 'A',
            "id": '58',
            "move": true,
        },
        {
            "pos": [
                40,
                0
            ],
            "name": 'A',
            "id": '59',
            "move": true,
        },
        {
            "pos": [
                20,
                0
            ],
            "name": 'A',
            "id": '60',
            "move": true,
        },
        {
            "pos": [
                0,
                0
            ],
            "name": 'A',
            "id": '61',
            "move": true,
        },
        {
            "pos": [
                -180,
                0
            ],
            "name": 'A',
            "id": '62',
            "move": true,
        },
        {
            "pos": [
                -160,
                0
            ],
            "name": 'A',
            "id": '63',
            "move": true,
        },
        {
            "pos": [
                -140,
                0
            ],
            "name": 'A',
            "id": '64',
            "move": true,
        },
        {
            "pos": [
                -120,
                0
            ],
            "name": 'A',
            "id": '65',
            "move": true,
        },
        {
            "pos": [
                -100,
                0
            ],
            "name": 'A',
            "id": '66',
            "move": true,
        },
        {
            "pos": [
                -80,
                0
            ],
            "name": 'A',
            "id": '67',
            "move": true,
        },
        {
            "pos": [
                -60,
                0
            ],
            "name": 'A',
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
            "name": 'A',
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
            "name": 'sg',
            "id": '73',
            "move": true,
        },
        {
            "pos": [
                120,
                -60
            ],
            "name": 'dh',
            "id": '74',
            "move": true,
        },
        {
            "pos": [
                90,
                -60
            ],
            "name": 'dfg',
            "id": '75',
            "move": true,
        },
        {
            "pos": [
                60,
                -60
            ],
            "name": 'ert',
            "id": '76',
            "move": true,
        },
        {
            "pos": [
                30,
                -60
            ],
            "name": 'y',
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
            "name": 'er',
            "id": '79',
            "move": true,
        },
        {
            "pos": [
                -60,
                -60
            ],
            "name": 'ery',
            "id": '80',
            "move": true,
        },
        {
            "pos": [
                -90,
                -60
            ],
            "name": 'ery',
            "id": '81',
            "move": true,
        },
        {
            "pos": [
                -120,
                -60
            ],
            "name": 'ery',
            "id": '82',
            "move": true,
        },
        {
            "pos": [
                -150,
                -60
            ],
            "name": 'ry',
            "id": '83',
            "move": true,
        },
        {
            "pos": [
                -180,
                -60
            ],
            "name": 'r',
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
            "name": 'sdf',
            "id": '86',
            "move": true,
        },
        {
            "pos": [
                140,
                -40
            ],
            "name": 'xcv',
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
            "name": 'sf',
            "id": '89',
            "move": true,
        },
        {
            "pos": [
                80,
                -40
            ],
            "name": 'g',
            "id": '90',
            "move": true,
        },
        {
            "pos": [
                60,
                -40
            ],
            "name": 'sf',
            "id": '91',
            "move": true,
        },
        {
            "pos": [
                40,
                -40
            ],
            "name": 'sf',
            "id": '92',
            "move": true,
        },
        {
            "pos": [
                20,
                -40
            ],
            "name": 'cv',
            "id": '93',
            "move": true,
        },
        {
            "pos": [
                0,
                -40
            ],
            "name": 'dg',
            "id": '94',
            "move": true,
        },
        {
            "pos": [
                -180,
                -40
            ],
            "name": 'dgf',
            "id": '95',
            "move": true,
        },
        {
            "pos": [
                -160,
                -40
            ],
            "name": 'j',
            "id": '96',
            "move": true,
        },
        {
            "pos": [
                -140,
                -40
            ],
            "name": 'fh',
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
            "name": 'fg',
            "id": '101',
            "move": true,
        },
        {
            "pos": [
                -40,
                -40
            ],
            "name": 'sdf',
            "id": '102',
            "move": true,
        },
        {
            "pos": [
                -20,
                -40
            ],
            "name": '3',
            "id": '103',
            "move": true,
        },

        // 纬度-20
        {
            "pos": [
                180,
                -20
            ],
            "name": '1',
            "id": '104',
            "move": true,
        },
        {
            "pos": [
                160,
                -20
            ],
            "name": '1',
            "id": '105',
            "move": true,
        },
        {
            "pos": [
                140,
                -20
            ],
            "name": 'g',
            "id": '106',
            "move": true,
        },
        {
            "pos": [
                120,
                -20
            ],
            "name": 's',
            "id": '107',
            "move": true,
        },
        {
            "pos": [
                100,
                -20
            ],
            "name": 'm',
            "id": '108',
            "move": true,
        },
        {
            "pos": [
                80,
                -20
            ],
            "name": 'n',
            "id": '109',
            "move": true,
        },
        {
            "pos": [
                60,
                -20
            ],
            "name": 'cv',
            "id": '110',
            "move": true,
        },
        {
            "pos": [
                40,
                -20
            ],
            "name": 'f',
            "id": '111',
            "move": true,
        },
        {
            "pos": [
                20,
                -20
            ],
            "name": 'hg',
            "id": '112',
            "move": true,
        },
        {
            "pos": [
                0,
                -20
            ],
            "name": 'l',
            "id": '113',
            "move": true,
        },
        {
            "pos": [
                -180,
                -20
            ],
            "name": 'k',
            "id": '114',
            "move": true,
        },
        {
            "pos": [
                -160,
                -20
            ],
            "name": 'u',
            "id": '115',
            "move": true,
        },
        {
            "pos": [
                -140,
                -20
            ],
            "name": 'y',
            "id": '116',
            "move": true,
        },
        {
            "pos": [
                -120,
                -20
            ],
            "name": 't',
            "id": '117',
            "move": true,
        },
        {
            "pos": [
                -100,
                -20
            ],
            "name": 'r',
            "id": '118',
            "move": true,
        },
        {
            "pos": [
                -80,
                -20
            ],
            "name": 'e',
            "id": '119',
            "move": true,
        },
        {
            "pos": [
                -60,
                -20
            ],
            "name": 'sd',
            "id": '120',
            "move": true,
        },
        {
            "pos": [
                -40,
                -20
            ],
            "name": 'ds',
            "id": '121',
            "move": true,
        },
        {
            "pos": [
                -20,
                -20
            ],
            "name": 'a',
            "id": '122',
            "move": true,
        },
    ]
}

module.exports = TEST_DATA
