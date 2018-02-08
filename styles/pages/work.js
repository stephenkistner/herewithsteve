var vars = require('../vars.js')

module.exports = `

  .view--work {
    width: 100vw;
    padding-top: 100px;
    padding-bottom: ${vars.blockspacing.d};
  }

  .view--work section {
    margin-bottom: ${vars.blockspacing.m}
  }

  .view--work .scale-text {
    text-align: center;
    margin-bottom: 1em;
  }


  .view--work  img {
    max-width: 100%;
    margin: 0 auto;
    display: block;
  }

  .work-desc .type1 {
    margin-bottom: .35em;
  }

  .work-links .linky {
    margin-right: 2em;
  }

  .view--museum h3 {
    font-weight: normal;
  }

  .view--museum .work-desc {
    max-width: 1400px;
    margin: 0 auto;
  }


  @media (min-width: ${vars.breakpoints.d600}) {

    .view--work {
      padding-top: 150px;
    }
    .view--work section {
      margin-bottom: ${vars.blockspacing.d}
    }
  }

`
