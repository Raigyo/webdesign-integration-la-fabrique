const navbar = document.querySelector("#nav");
window.onscroll = () => {
  if (window.scrollY > 200) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
};
