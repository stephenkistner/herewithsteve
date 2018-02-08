var vars = require('../vars.js')

module.exports = `

  .view--quiz {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .quiz-hide {
    animation-name: quizOut;
    animation-duration: .3s;
    animation-iteration-count: 1;
  }
  @keyframes quizOut {
    0% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-10vh); }
  }

  .quiz-content {
    width: 100%;
  }

  .quiz-content ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

  }
  .quiz-content .quiz-column {
    flex-flow: column;
  }

  .quiz-column .quiz-option{
    margin: .2em auto;
  }

  .quiz-content ul .bigtext {
    font-size: 50px;
  }

  .quiz-option {
    margin: 0;
    cursor: pointer;
    transform-origin: center;
    transition: all .3s ease;
  }

  .quiz-option img {
    height: 25vw;
  }


  .quiz-option:hover {
    transform: scale(1.1);
  }

  .quiz-options .quiz-option:after, .quiz-options .quiz-option:before {
    content: '';
    margin: 0;
    padding: 0;
  }

  .quiz-result {
    width: 100%;
  }

  @media (min-width: ${vars.breakpoints.d600}) {

    .quiz-content .quiz-column {
      flex-flow: row wrap;
    }

    .quiz-option img {
      height: 10vw;
    }

    .quiz-content ul .bigtext {
      font-size: 80px;
    }

    /*.quiz-options .quiz-option:before {
      content: '→';
      padding-right: 1em;
      margin: 0;
      display: none;
    }

    .quiz-options .quiz-option:after {
      content: '←';
      padding-left: 1em;
      display: none;
    }

    .quiz-options .quiz-option:hover:after, .quiz-options .quiz-option:hover:before {
      display: inline;
    }*/
  }

`
