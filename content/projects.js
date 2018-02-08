
var addTemp = require('../scripts/addtemplate.js')

var temp = 'Project'

var data = {
  objects: {
    desc: '<b>Steve</b> designed <b>Objects,</b> an AR experience for the Quartz app',
    image: '/assets/img/objects-phone-archive.jpg',
    scrollCTA: 'Read about it ↓',
    linkOutText: 'download for iOS',
    linkOutURL: 'https://itunes.apple.com/us/app/quartz/id1076683233?mt=8',
    content: 'Objects'
  },
  paradise: {
    desc: '<b>Steve</b> created a dysfunctional desktop interface that tells a story',
    image: '/assets/img/paradise-main.jpg',
    imageBump: true,
    scrollCTA: '(more soon) ↓',
    linkOutText: 'palm.computer',
    linkOutURL: 'http://palm.computer/',
    content: 'Paradise'
  },
  'bot-studio': {
    desc: '<b>Steve</b> designed & built a lightweight website for the <b>Quartz Bot Studio</b>',
    image: '/assets/img/bot-studio-main.jpg',
    imageBump: true,
    scrollCTA: '(more soon) ↓',
    linkOutText: 'bots.qz.com',
    linkOutURL: 'https://bots.qz.com/',
    content: 'Bots'
  }
}




module.exports = addTemp(data, temp)
