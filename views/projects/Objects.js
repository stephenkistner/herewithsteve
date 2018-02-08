const html = require('choo/html')
const raw = require('choo/html/raw')

module.exports = function(state) {

  return html`

  <div class="project__body">

    <div class="img__phones--2up lastbump hidefirst">
      <img src="/assets/img/objects-phone-messages.jpg" />
      <img src="/assets/img/objects-phone-berlinwall.jpg" />
    </div>

    <section class="sidemargins">
    <p class="type1 sidemargins"><b>Objects</b> adds interactive AR models to Quartz’s ongoing conversation about the news. At first, each model accompanies a timely story, but you can access them any time through the object library.</p>

    <p class="type1 sidemargins">As the iOS team’s lead designer, I made sure that introducing a radically new medium to people felt natural and effortless.</p>
    </section>

    <section class="sidemargins">
      <img class="img-inline img-lead" style="max-width: 400px;" src="/assets/img/objects-messages-fade.jpg" />

      <h2>First contact</h2>
      <p>As the user’s first point of entry into this strange new land, the AR message bubble needed to frame the experience and invite users to give it a tap.</p>


      <figure class="marginoverride">
      <div style="background-color: #f5f5f5; width: 100%;">
        <div class="sidescroller tinymessages">
          <img src="/assets/img/objects-testmessage01.gif" />
          <img src="/assets/img/objects-testmessage02.gif" />
          <img src="/assets/img/objects-testmessage03.gif" />
          <img src="/assets/img/objects-testmessage04.gif" />
        </div>
        <div class="sidescroller tinymessages">
          <img src="/assets/img/objects-testmessage05.gif" />
          <img src="/assets/img/objects-testmessage06.gif" />
          <img src="/assets/img/objects-testmessage07.gif" />
          <img src="/assets/img/objects-testmessage08.gif" />
        </div>
      </div>
      <figcaption><span>With no existing best practices to fall back on, I explored a breadth of different approaches to visually and textually describing AR to unfamiliar users.</span></figcaption>
      </figure>

      <img class="img-inline img-shadow" style="max-width: 330px; margin: 3em auto;" src="/assets/img/objects-cassini-message.gif" />

      <p>Showing a preview of the model highlights its beauty and provides context for the coming experience. The icon had to gesture towards AR, but also generally represent 3D space, since users on older iPhones without ARKit still receive the messages, and can open them in a basic 3D viewer.</p>

      </section>



      <section class="sidemargins">
        <h2>We have liftoff</h2>

        <p>We worked quickly to launch Objects alongside iOS 11 (which caused quite the <i>Buzz</i>). Since we focused on ensuring people could effortlessly open and place an object, the AR viewer itself was pretty barebones.</p>

        <div class="img__phones--2up firstbump viewswitcher">
          <div class="viewswitcher__view">
          <figure>
            <img src="/assets/img/objects-phone-viewer-old.jpg" />
            <figcaption><span>AR viewer (original)</span></figcaption>
          </figure>
          </div>

          <div class="viewswitcher__view">
          <figure>
            <img src="/assets/img/objects-phone-berlinwall.jpg" />
            <figcaption><span>AR viewer (updated)</span></figcaption>
          </figure>
          </div>
        </div>

        <p>For the second iteration, we optimized the viewer’s UI for clarity and ergonomics. I moved the most essential controls to the bottom of the screen to improve reachability.</p>

        <p>We added a camera button to make it easier to capture and share screenshots, and removed the reset button because the same thing can be achieved by exiting and reopening the viewer.</p>

        <div class="sidescroller marginoverride">
          <img src="/assets/img/objects-viewer-process1.jpg" />
          <img src="/assets/img/objects-viewer-process2.jpg" />
          <img src="/assets/img/objects-viewer-process3.jpg" />
          <img src="/assets/img/objects-viewer-process4.jpg" />
          <img src="/assets/img/objects-viewer-process5.jpg" />
          <img src="/assets/img/objects-viewer-process6.jpg" />
          <img src="/assets/img/objects-viewer-process7.jpg" />
        </div>

        <p>With tons of new features added to the screen, each icon had to convey its functionality while also receding into the background. Too many labels or large icons would detract from the immersiveness of AR.</p>

        <p>Ultimately, I struck a balance between labeling new and unfamiliar features with text, while using only icons to describe more the common interactions.</p>

      </section>

      <section class="sidemargins">

        <img class="img-inline img-lead" style="max-width: 400px;" src="/assets/img/objects-library-fade.jpg" />

        <h2>The Eagle has landed</h3>
        <p>With the initial launch of Objects a resounding success, one of the most requested features was a way of accessing objects from past stories. For the second iteration of Objects, we added an <i>ARchive</i> to the right of the main screen, as well as in the viewer itself as a popover menu.</p>

      </section>

      <section class="sidemargins">

        <h2>Lost in space</h3>
        <p>When designing for a new medium, it’s easy to overthink some interactions. It’s even easier to jump straight to making UI-centric design decisions out of familiarity.</p>

      <figure class="marginoverride">
        <div class="sidescroller" style="margin-bottom: 0;">
          <img src="/assets/img/objects-scaling1.jpg" />
          <img src="/assets/img/objects-scaling2.jpg" />
          <img src="/assets/img/objects-scaling3.jpg" />
          <img src="/assets/img/objects-scaling4.jpg" />
        </div>
        <figcaption>UI-centric approaches to letting users scale the models presented tons of logical inconsistencies in state management</figcaption>
      </figure>

        <p>My initial designs for scaling objects felt clunky and unnatural.</p>

        <img class="img-inline" style="max-width: 400px;" src="/assets/img/objects-yunomeme.jpg" />

        <p>Of course, the solution was hidden in plain sight....</p>

        <p><i>*<b>Cough</b> cough*</i> PiNcH To zOoM <i>*<b>cough</b> cough*</i></p>

        <p>When working with AR, it’s important to consider the physicality of interactions, since users inhabit this neat in-between space that’s neither wholly digital nor physical. The interface should be more gestural and contextual, fading into the background of the experience as much as possible. Don’t overthink it.</p>

      </section>

      <section class="sidemargins">

        <img class="img-inline img-lead img-only-m" src="/assets/img/objects-recognition-m.jpg" />
        <img class="img-inline img-lead img-only-d" src="/assets/img/objects-recognition-d.jpg" />

        <h2 style="margin-top: 1em;">Back at ground control</h2>

        <p>The initial launch of Objects resulted in an influx of new users, providing Quartz a nice traffic bump. Apple also <a href="https://itunes.apple.com/us/story/id1313569260">featured it</a> several times, and named it <a href="https://itunes.apple.com/gb/story/id1322513828">App of the Day</a> in the UK on January 2, 2018.</p>

        <p>Ultimately, though, the most rewarding part of the project was seeing people enjoying the experience and getting something meaningful out of it.</p>

        <p>✌️ Thanks for reading!</p>



      </section>

      <div class="img__phones--2up firstbump showall wide-images" style="margin-bottom: 0;">
        <img class="img-shadow" style="max-width: 90vw;" src="/assets/img/objects-nicetweet.gif" />

          <img class="" style="max-width: 90vw; margin-top: 50px;" src="/assets/img/objects-cassini-3d.jpg" />
      </div>


  </div>

  `

}
