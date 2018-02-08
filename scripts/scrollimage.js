module.exports = function() {
  var scrollPos = window.scrollY;
  var imageRotation = 15;
  var imageScale = 1;
  var imageOpacity = 1;

  window.addEventListener('scroll', function(e){

    scrollPos = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        imageRotation = map_range(scrollPos,0,500,15,25);
        imageScale = map_range(scrollPos,0,500,1,.8);
        imageOpacity = map_range(scrollPos,0,500,1,0);
        ticking = false;
      });
      ticking = true;
    }

  })
}
