const timelines = document.querySelectorAll(".timeline__right");

const trackers = document.querySelectorAll(".timeline__tracker");
// console.log(bullet.offsetParent);

window.addEventListener(
  "scroll",
  (e) => {
    timelines.forEach((timeline, i) => {
      //  Animate on scroll
      if (trackers[i].offsetTop > 0) {
        timeline
          .querySelector(".timeline__content")
          .classList.add("animate-on-scroll");
      } else {
        timeline
          .querySelector(".timeline__content")
          .classList.remove("animate-on-scroll");
      }

      //       Timeline progress
      timeline.style.background = `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${
        trackers[i].offsetTop + 5
      }px, var(--color-grey) ${
        trackers[i].offsetTop + 5
      }px, var(--color-grey) 100%)`;
    });
  },
  { passive: true }
);

(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline1 li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();