const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const pageWrap = document.querySelector(".page-wrap");

  burger.addEventListener("click", () => {
    // toggle nav
    nav.classList.toggle("nav-active");

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });

    // burger animation
    burger.classList.toggle("toggle");

    if (pageWrap.classList.contains("hide")) {
      pageWrap.classList.toggle("show");
    } else {
      pageWrap.classList.toggle("hide");
    }
  });
};

const setToActive = () => {
  const navLinksActive = document.querySelectorAll(".nav-links a");

  navLinksActive.forEach(link => {
    link.addEventListener("click", function() {
      changeActive(link);
    });
  });

  function changeActive(link) {
    navLinksActive.forEach(li => {
      li.classList.remove("active");
    });
    link.classList.add("active");
  }
};

navSlide();
setToActive();

function copy() {
  var cb = document.getElementById("cb");
  cb.value = "vika.kleyko@gmail.com";
  cb.style.display = "block";
  cb.select();
  document.execCommand("copy");
  cb.style.display = "none";
  document.getElementsByClassName("tooltiptext").innerHTML = "copied";
  console.log(document.getElementsByClassName("tooltiptext"));
}
