// Sticky menu

const navbar = document.querySelector("#nav");
window.onscroll = () => {
  if (window.scrollY > 200) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
};

// Active section

let navbarLinks = document.querySelectorAll("#nav .nav-links li a");
// console.log(navbarLinks);
window.addEventListener("scroll", (e) => {
  navbarLinks.forEach((link) => {
    let section = document.querySelector(link.hash);
    // console.log(section);
    if (
      window.scrollY + 150 > section.offsetTop &&
      window.scrollY + 150 < section.offsetTop + section.offsetHeight
    ) {
      link.classList.add("active-nav");
    } else {
      link.classList.remove("active-nav");
    }
  });
});
