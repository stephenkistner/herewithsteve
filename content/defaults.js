
var addTemp = require('../scripts/addtemplate.js')

var temp = 'Default'

/*var data = {
  yummy: {
    text: '<img class="img-intext" src="/assets/img/fieri.gif"/> <b>Hey there...</b>',
    subtext: "Would you like to visit <a href='/flavortown'>Flavortown</a>?",
    align: 'center'
  }
}*/

var data = {
  steveism1: {
    text: '<b>Steve says:</b> <i>Good design is true to its medium and creates shared meaning.</i>'
  },
  steveism2: {
    text: '<b>Steve fact:</b> I don’t like eggs or raw tomatoes. 🍅🤢',
    subtext: 'This often makes ordering a bacon, egg and cheese a confusing process.',
    align: 'center'
  },
  steveism3: {
    text: 'Steve has never eaten a Tide Pod 🙏',
    align: 'center'
  },
  steveism4: {
    text: '<b>Steve</b> loves pre-work coffee and breakfast! <a href="mailto:chat@with.sk?subject=Hark! Lets grab coffee sometime">Email</a> him if you wanna meetup.'
  },
  steveism5: {
    text: '<b>Steve</b> loves to talk about design for participation! Shoot him an <a href="mailto:chat@with.sk?subject=Lets taco bout participation">email</a> if you’d like to taco bout it. Or if you just wanna get tacos... 🌮'
  },
  steveism6: {
    text: '<b>Steve says:</b> <i>A good interface feels natural, its mechanics easy to navigate. Like a flowing liquid.</i>'
  },
  steveism7: {
    text: '<b>Steve</b> wants to make better use of the networks that bind us to produce shared experiences and foster understanding.'
  },
  steveism8: {
    text: '<b>Steve</b> is presently exploring the concept of anti-product and treating interface as art.'
  },
  steveism9: {
    text: '<b>Steve says:</b> <i>The best products establish harmony between form and content, where the two dance together to create something more than the sum of their parts.</i>'
  },
}




module.exports = addTemp(data, temp)
