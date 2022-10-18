const gesuredZone = document.querySelector(".carousel-wrapper");
const carouselItems = document.querySelectorAll(".carousel-item").length;
gesuredZone.addEventListener("touchstart", startTouch, { passive: false });
gesuredZone.addEventListener("touchmove", moveTouch, { passive: false });

// slide count

slideTouchIndex = 0;

// Swipe Up / Down / Left / Right
let initialX = null;
let initialY = null;

function startTouch(e) {
  e.preventDefault();
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}

function moveTouch(e) {
  e.preventDefault();
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  let currentX = e.touches[0].clientX;
  let currentY = e.touches[0].clientY;

  let diffX = initialX - currentX;
  let diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      // console.log("swiped left", slideIndex);
      if (slideIndex < carouselItems - 1) nextOrPrevSlide("next");
    } else {
      // swiped right
      // console.log("swiped right");
      nextOrPrevSlide("prev");
    }
  }
  /*else {
    // sliding vertically
    if (diffY > 0) {
      // swiped up
      console.log("swiped up");
    } else {
      // swiped down
      console.log("swiped down");
    }
  }*/

  initialX = null;
  initialY = null;

  e.preventDefault();
}
