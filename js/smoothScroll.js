////////////// SCROLL ANIMATIONS IN VANALLA JS //////////////
//////////////////jquery is for losers//////////////////////

//--- adapted from paul pawelgrzybek.com----//
//https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/

function scrollIt(destination, duration = 200) {

//----get height of window----//
  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

//----what time is it?)----//
  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

//----get the destination (can be number or class)----//
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset)-50;


  //----- move if there is not animation frame support -----//
  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
  }
  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    let t = time
    const timeFunction = (1 + (--t) * t * t * t * t);
    window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

    //------done scrolling--------//
    if (window.pageYOffset === destinationOffsetToScroll) {
      return;
    }
    requestAnimationFrame(scroll);
  }
  scroll();
}
