const html = require('choo/html');
const raw = require('choo/html/raw');

module.exports = function (state, emit) {

  return html`
  <div class="view--work scrolling view--museum">

      <img style="max-width: 200px; display: block; margin:0 auto 5em auto;" src="/assets/img/museum.jpg" />

      <h1 class="scale-text sidemargins">THE MUSEUM OF DEAD WORKS</h1>
      <div class="sidemargins">
      <p class="" style="max-width: 750px; margin: 1em auto 3em auto;">Vaporware, experiments and other miscellany from <b>Steve’s</b> rear-view mirror. Rejected, irrelevant or unmaintained, they still have a special place in <b>Steve’s</b> heart.</p>
      </div>

      <section>
      <div class="sidemargins">
      <img src="/assets/img/museum-creative.gif" />
      </div>

      <div class="work-desc"><h3 class="sidemargins"><b>How to be Creative</b> returns Google search results for 3 arbitrarily selected keywords. Will it make you more creative?</h3>
        <p class='work-links sidemargins'>
          <span class="linky"> <a href="http://stephenkistner.github.io/creative/">${raw('maybe it still works?&nbsp;↗')}</a></span>
        </p>
      </div>
      </section>

      <section>
      <div class="sidemargins">
      <img src="/assets/img/museum-nose.jpg" />
      </div>

      <div class="work-desc"><h3 class="sidemargins">A random little exploration of messaging as storytelling device with content about ambient & contextual interfaces.</h3>
        <p class='work-links sidemargins'>
          <span class="linky"> <a href="https://mutableui.github.io/">${raw('maybe it still works?&nbsp;↗')}</a></span>
        </p>
      </div>
      </section>


      <section>
      <div class="sidemargins">
      <img src="/assets/img/museum-metereol.gif" />
      </div>

      <div class="work-desc"><h3 class="sidemargins"><b>Metereol</b> is a typographic weather visualizer. It’s just a quick sketch built with Processing/p5js, so be gentle with it and don’t be alarmed if it’s a bit slow.</h3>
        <p class='work-links sidemargins'>
          <span class="linky"> <a href="http://metereol.github.io/app/">${raw('maybe it still works?&nbsp;↗')}</a></span>
        </p>
      </div>
      </section>

      <section>
      <div class="sidemargins">
      <img src="/assets/img/museum-more.gif" />
      </div>

      <div class="work-desc"><h3 class="sidemargins">A very early interactive moodboard for my degree project @ MICA. It’s really just a random compilation of design thoughts and other interesting bits.</h3>
        <p class='work-links sidemargins'>
          <span class="linky"> <a href="http://stephenkistner.github.io/more/">${raw('maybe it still works?&nbsp;↗')}</a></span>
        </p>
      </div>
      </section>

      <section>
      <div class="sidemargins" style="margin-bottom: 2em;">
      <img src="/assets/img/museum-derive.jpg" />
      </div>

      <div class="work-desc"><h3 class="sidemargins">Explorations for a content discovery tool and thought engine. How can the spatial and formal representation of web searches enhance the way we discover content and make new connections?</h3>
      </div>
      </section>


      <section>
      <div class="img__phones--2up firstbump showall" style="width: 100%; margin-bottom: 2em;">
        <img style="margin-left: 20px; margin-right: 20px; max-height: 80vh;" src="/assets/img/museum-happening1.jpg" />
        <img style="margin-left: 20px; margin-right: 20px; max-height: 80vh;" style="flex-grow: .4;" src="/assets/img/museum-happening2.jpg" />
      </div>

      <div class="work-desc"><h3 class="sidemargins">Concepts for Happening, a conversational news app. What if you had your own personal reporter?</h3>
      </div>
      </section>


  <section>
      <p style="text-align: center;" class="type1 sidemargins"><i>Still craving more</i>? Sometimes <b>Steve</b> also posts process shots over on <a href="https://www.are.na/steve-k/process-process-process">Are.na</a>.</p>
  </section>
    </div>
  `
};
