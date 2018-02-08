const html = require('choo/html')
const raw = require('choo/html/raw')

module.exports = function(state) {

  return html`

  <div class="project__body">

    <img style="margin: 0 auto 2em auto; display: block;" src="/assets/img/construction.gif" />

    <p style="text-align: center">Full write-up coming soon. For now here's some eye candy</p>


    <div class="sidemargins">
    <img style="max-width:100%; margin: 0 auto; display: block;" src="/assets/img/paradise-01.jpg" />
    <img style="max-width:100%; margin: 0 auto; display: block;" src="/assets/img/paradise-02.jpg" />
    <img style="max-width:100%; margin: 0 auto; display: block;" src="/assets/img/paradise-03.jpg" />
    </div>

  </div>

  `

}
