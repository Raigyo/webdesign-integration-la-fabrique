//  https://github.com/piersrueb/simpleparallax

const mediaQuery = window.matchMedia(
  "(min-width: 320px) and (max-width: 1024px)"
);

const simpleParallax = (elem, modifier) => {
  let paras = document.getElementsByClassName(elem);
  for (let i = 0; i < paras.length; i++) {
    paras[i].setAttribute(
      "style",
      "background-repeat: no-repeat; background-attachment: fixed; background-size: cover;background-position: center center;"
    );
  }
  const sp = () => {
    for (let i = 0; i < paras.length; i++) {
      let x = paras[i].getBoundingClientRect().top / modifier;
      let y = Math.round(x * 100) / 100;
      paras[i].style.backgroundPosition = "center " + y + "px";
    }
    requestAnimationFrame(sp);
  };
  requestAnimationFrame(sp);
};

/* Media queries: parallax disabled on mobile */
handleTabletChange = (e) => {
  if (!e.matches) {
    // console.log("Desktop");
    simpleParallax("para", 2);
  }
};

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

// If screen size changes during session
mediaQuery.onchange = (e) => {
  if (!e.matches) {
    // console.log("Desktop");
    simpleParallax("para", 2);
  } else {
    // console.log("Mobile");
    simpleParallax("para", 0);
    location.reload();
  }
};
