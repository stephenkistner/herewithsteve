var vars = require('../vars.js')

module.exports = `

  .view--results .stevesmash {
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    margin-bottom: 100px;
  }

  .results-quiz {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 100px;
  }

  .results-quiz h2 {
    text-align: center;
    margin: 0 auto 1em auto;
  }

  .results-quiz .answer-wrapper {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
  }

  .answer-wrapper .single-answer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
  }

  .single-answer .answer-label {
    position: absolute;
    left: 10px;
    z-index: 2;
    margin-bottom: 0;
  }

  .single-answer .answer-label img {
    display: inline-block;
    max-height: 50px;
  }

  .single-answer .answer-bar__wrapper {
    width: calc(100vw - 40px);
    height: 40px;
    position: relative;
    display: inline-block;
    border: 1px solid ${vars.colors.graytext};
  }
  .single-answer .answer-bar__fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #7DFCFF;
  }

  .single-answer .answer-bar__wrapper .bar-label {
    position: absolute;
    right: 10px;
    line-height: 40px;
  }


  .single-answer.single-answer-with-images .answer-label {
    position: relative;
    margin-right: 20px;
  }

  .single-answer.single-answer-with-images .answer-bar__wrapper {
    flex-shrink: 1;
    width: 50vw;
  }





  @media (min-width: ${vars.breakpoints.d600}) {

    .results-quiz {
      margin-bottom: 150px;
    }


    .single-answer .answer-label {
      position: relative;
      margin-right: 20px;
    }

    .single-answer .answer-label img {
      max-height: 80px;
    }

    .single-answer .answer-bar__wrapper {
      width: 30vw;
    }



  }

  @media (min-width: ${vars.breakpoints.d1000}) {

  }
`
