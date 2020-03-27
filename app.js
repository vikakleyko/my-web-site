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

// Get the modal
var modalDSDemo = document.querySelector(".ds-demo-modal");
var modalDSSN = document.querySelector(".ds-sn-modal");
var modalBS = document.querySelector(".ds-sn-modal");
var modalRunit = document.querySelector(".ds-runit-modal");

// Get the button that opens the modal
var btnDSDemo = document.querySelector(".ds-demo-button");
var btnDSSN = document.querySelector(".ds-sn-button");
var btnBS = document.querySelector(".bs-button");
var btnRunit = document.querySelector(".runit-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

btnDSDemo.onclick = function() {
  modalDSDemo.style.display = "block";
};
btnDSSN.onclick = function() {
  modalDSSN.style.display = "block";
};
btnBS.onclick = function() {
  modalBS.style.display = "block";
};
btnRunit.onclick = function() {
  modalRunit.style.display = "block";
};

span.onclick = function() {
  modalDSDemo.style.display = "none";
  modalDSSN.style.display = "none";
  modalBS.style.display = "none";
  modalRunit.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modalDSDemo) {
    modalDSDemo.style.display = "none";
  };
  if (event.target == modalDSSN) {
    modalDSSN.style.display = "none";
  };
  if (event.target == modalBS) {
    modalBS.style.display = "none";
  };
  if (event.target == modalRunit) {
    modalRunit.style.display = "none";
  };
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
