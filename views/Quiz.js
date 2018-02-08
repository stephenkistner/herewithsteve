const html = require('choo/html')
const raw = require('choo/html/raw')

var pushed = false;

module.exports = function (state, emit) {
  var quizContent = state.currentPageData
  var scaleText

  var pushDelay = 1500

  var quizColumn = ''
  if (state.currentPageData.columnFlow) {
    quizColumn = 'quiz-column'
  }

  if (state.currentPageData.bigtext) {
    var scaleText = "bigtext"
  }
  return html`
    <div class="view--quiz" id="quiz" style="height:${state.fullPageHeight}px;">
      ${contentSwitcher(quizContent)}
    </div>
  `

  function contentSwitcher(content) {
    if (state.currentPageData.quizAnswered) {
      return renderResults(content)
    }
    else {
      return renderQuiz(content)
    }
  }

  function renderQuiz(content) {
    return html`
      <div class="quiz-content">
        <p class="type1 sidemargins"><b>${raw(content.title)}</b></p>
        <ul class="quiz-options sidemargins ${quizColumn}">
          ${renderOptions(content.options)}
        </ul>
      </div>
    `
  }

  function renderOptions(options) {
    var answers = options.map(function(option){
      return html`<li class="quiz-option type1 ${scaleText}" onclick=${function(){handleResponse(option.response, pushDelay)}}>${raw(option.text)}</li>`
    })
    return answers
  }

  function renderResults(content) {

    return html`
      <div class="quiz-result">
        <p class="type1 sidemargins">${raw(state.currentPageData.quizResult)}</p>
      </div>
    `
  }

  function handleResponse(qResponse, pushDelay) {
    emit('quiz:submitResponse', {response: qResponse, delay: pushDelay})
  }

  function runItBoy() {
    state.pushed = true;
    emit('quiz:finished')
  }

}
