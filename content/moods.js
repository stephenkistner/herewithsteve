
var addTemp = require('../scripts/addtemplate.js')

var temp = 'Mood'

var data = {
  "business-culture": {
    api: 'arena',
    chan: 'business-culture',
    text: '<b>Steve</b> is obsessed with '
  },
  "neon-plants-and-lava-lamps": {
    api: 'arena',
    chan: 'neon-plants-and-lava-lamps',
    text: '<b>Steve</b> wants to walk among the '
  },
  "chromatic-atmospheres": {
    api: 'arena',
    chan: 'chromatic-atmospheres',
    text: '<b>Steve</b> collects images of '
  },
  "calm-spaces": {
    api: 'arena',
    chan: 'calm-spaces',
    text: '<b>Steve</b> likes to look at '
  },
  "mall-madness": {
    api: 'arena',
    chan: 'mall-madness',
    text: '<b>Steve</b> has a bad case of '
  },
  "personal-aesthetic": {
    api: 'arena',
    chan: 'personal-aesthetic',
    text: '<b>Steve</b> attempts to define a '
  },
  "open-signs": {
    api: 'arena',
    chan: 'open-signs',
    text: '<b>Steve</b> is fascinated by the many variations of '
  },
  "process-process-process": {
    api: 'arena',
    chan: 'process-process-process',
    text: '<b>Steve</b> shares his '
  }
}




module.exports = addTemp(data, temp)
