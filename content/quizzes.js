
var addTemp = require('../scripts/addtemplate.js')

var temp = 'Quiz'

var data = {
  "q-likey": {
    title: "Do you like Steve’s new website?",
    options: [{text: 'Yes', response: 'rYes'}, {text: 'No', response: 'rNo'}, {text: 'Yes!!!', response: 'rHellYes'}],
    responses: {
      rYes:{text: 'Yay! Glad you like it.'},
      rNo:{text: 'Oh. Ok.'},
      rHellYes:{text: '😎 Rad! Thanks for stopping by.'}
    },
    database: 'likeDaSite'
  },
  "q-feely": {
    title: "How ya feeling?",
    options: [{text: '😊', response: 'happy'},
              {text: '😐', response: 'meh'},
              {text: '😒', response: 'notamused'},
              {text: '🙃', response: 'wooplol'},
              {text: '😴', response: 'tired'}],
    responses: {
      happy:{text: 'Good! Steve is happy you’re happy'},
      meh:{text: 'You and me both. 👍'},
      notamused:{text: 'Not a fan of the Steve! button huh?'},
      wooplol:{text: 'Another day in paradise eh? 🌴'},
      tired:{text: 'Don’t forget to get some rest. You deserve it!'}
    },
    bigtext: true,
    database: 'howYouFeel'
  },
  "q-whatissteve": {
    title: "Is Steve a designer, or a developer?",
    options: [{text: 'Designer.', response: 'designer'}, {text: 'Developer.', response: 'developer'}, {text: 'Yes.', response: 'yes'}],
    responses: {
      designer:{text: 'Well he <i>did</i> go to art school... 🎨'},
      developer:{text: 'For you, he can be 😊'},
      yes:{text: 'Now <i>that’s</i> what I’m talking about! 💯'}
    },
    database: 'whatIsSteve',
    columnFlow: true
  },
  "q-hair": {
    title: "Best hair?",
    options: [{text: '<img src="/assets/img/bobross.gif" />', response: 'bobross'},
              {text: '<img src="/assets/img/tsoukalos.gif" />', response: 'tsoukalos'},
              {text: '<img src="/assets/img/fieri.gif" />', response: 'fieri'},
              {text: '<img src="/assets/img/mcmillan.gif" />', response: 'mcmillan'}],
    responses: {
      bobross:{text: 'Hard to argue with that...'},
      tsoukalos:{text: 'Something something <i>“ALIENS”...</i>'},
      fieri:{text: 'Awwww yeah let’s take a trip to <i>Flavortown</i> baby!', timing: 1900},
      mcmillan:{text: 'Bob Ross’s fro is too damn high!', timing: 1900}
    },
    database: 'bestHair'
  },
  "q-snack": {
    title: "Choose your favorite snack food",
    options: [{text: '<img src="/assets/img/dunkaroos.gif" />', response: 'dunkaroos'},
              {text: '<img src="/assets/img/tidepod.gif" />', response: 'tidepod'},
              {text: '<img src="/assets/img/cosmic-brownies.gif" />', response: 'cosmic'},
              {text: '<img src="/assets/img/avocado.gif" />', response: 'avocado'}],
    responses: {
      dunkaroos:{text: 'Steve’s never had Dunkaroos 😢'},
      tidepod:{text: 'It’s so wrong but <i>it feels so right...</i> 🤷‍', timing: 1700},
      cosmic:{text: 'Do we get to go outside for recess today? ⛹️', timing: 1700},
      avocado:{text: 'Behold! A millennial over yonder! 🥑', timing: 1600}
    },
    database: 'favSnack'
  },
  "q-here": {
    title: "Why are you here stranger?",
    options: [{text: 'Business', response: 'business'},
              {text: 'Pleasure', response: 'pleasure'},
              {text: 'Can anyone even be “here”?', response: 'sodeep'}],
    responses: {
      business:{url: '/work'},
      pleasure:{text: 'Come back soon for some cool new side projects 😜', timing: 2000},
      sodeep:{text: 'Oooohhh asking the important questions 🤔💭', timing: 2000}
    },
    database: 'whatBringsYouHere',
    columnFlow: true
  },
  "q-working": {
    title: "Working hard or hardly working?",
    options: [{text: '👨‍💻', response: 'working'},
              {text: '😅', response: 'notworking'}],
    responses: {
      working:{text: 'Rock on! I’m sure it will turn out great 💪', timing: 2100},
      notworking:{text: '😏 Steve respects your honesty', timing: 1800}
    },
    bigtext: true,
    database: 'workingHard'
  },
  "q-drinks": {
    title: "Steve drinks...",
    options: [{text: '<img src="/assets/img/lacroix.gif" />', response: 'lacroix'},
              {text: '<img src="/assets/img/arizona.gif" />', response: 'arizona'}],
    responses: {
      lacroix:{text: 'Sometimes, but it’s not his favorite...'},
      arizona:{text: 'More than he probably should... But it’s sooooo good 😅', timing: 1900}
    },
    database: 'steveDrinks'
  },
}




module.exports = addTemp(data, temp)
