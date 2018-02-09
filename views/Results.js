const html = require('choo/html')
const raw = require('choo/html/raw')

var quizSet = require('../content/quizzes.js')

module.exports = function (state, emit) {

  return html`
    <div class="view--results sidemargins">
    <div class="about__gradient-overlay" style="opacity:${state.aboutFadeOpacity}"></div>
      <div class="stevesmash">
      <p style="margin: auto;" class="type1">Total <b>Steve!</b> smashes: ${state.totalSteveClicks} </p>
      <p style="margin-bottom: 0;">📈 And the results are in...</p>
      </div>
      ${showQuizResults()}
    </div>
  `

  function showQuizResults() {
    var quizzes = state.allQuizzes.map(function(quiz) {
      //this quiz title
      var quizQuestion = quizSet[quiz].title
      //this quiz ARRAY of ALL ANSWERS with text and their response "keys"
      var quizAnswers = quizSet[quiz].options
      //this quiz firebase data as {response: value, ...}
      var quizData = state.quizResultData[quizSet[quiz].database]

      var quizHasImages = false
      if (quizSet[quiz].resultsShowImage) {
        quizHasImages = quizSet[quiz].resultsShowImage
      }

      return html`
        <div class="results-quiz">
          <h2>${quizQuestion}</h2>

          ${drawAnswers(quizAnswers, quizData, quizHasImages)}
        </div>
      `
    })
    return quizzes
  }

  function drawAnswers(options, data, hasImage) {
    var thisQuizData = data;
    var totalSum = 0;
    var addImageClass = ''
    if (hasImage) {
      addImageClass = 'single-answer-with-images'
    }
    if (thisQuizData != null) {
      options.map(function(option){
        totalSum += thisQuizData[option.response]
      })
      var answerDisplay = options.map(function(option) {
          var optionText = option.text
          var optionCount = thisQuizData[option.response]
        //  <p>${raw(optionText)}: ${optionCount}</p>
          var barWidth = optionCount/totalSum*100
          return html `
          <div class="single-answer ${addImageClass}">
          <p class="answer-label">${raw(optionText)}</p>
            <div class="answer-bar__wrapper">
              <div class="answer-bar__fill" style="width: ${barWidth}%"></div>
              <span class="type3 bar-label">${optionCount}</span>
            </div>
          </div>
          `
      })
      console.log(totalSum, data)
    }

    //
    return html `
      <div class="answer-wrapper">
        ${answerDisplay}
      </div>
    `
  }

}


/*
<div class="single-answer">
<p class="answer-label">${raw(optionText)}</p>
  <div class="answer-bar__wrapper">
    <div class="answer-bar__fill" style="width: ${barWidth}%"></div>
    <span class="type3 bar-label">${optionCount}</span>
  </div>
</div>

*/
