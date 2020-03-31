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

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".ml3 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 2250,
  delay: (el, i) => 150 * (i + 1)
});

var textWrapper2 = document.querySelector(".ml4");
textWrapper2.innerHTML = textWrapper2.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: ".ml4 .letter",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration: 2250,
  delay: (el, i) => 2000 + 150 * (i + 1)
});

(function() {
  var photo;
  var element;
  var windowHeight;

  function init() {
    photo = document.querySelector(".my-photo");
    element = document.querySelector(".hidden");
    windowHeight = window.innerHeight;
    console.log(about);

  }

  function checkPosition() {
      var positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
      
        photo.classList.add("appear");
        photo.classList.remove('hidden');

        var textWrapper3 = document.querySelector(".hidden");
        textWrapper3.innerHTML = textWrapper3.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );

        anime.timeline({ loop: false }).add({
          targets: ".hidden .letter",
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 500 + 15 * i
        });
        element.classList.remove("hidden");
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

// Get the modal
var modalDSDemo = document.querySelector(".ds-demo-modal");
var modalDSSN = document.querySelector(".ds-sn-modal");
var modalBS = document.querySelector(".bs-modal");
var modalRunit = document.querySelector(".runit-modal");

// Get the button that opens the modal
var btnDSDemo = document.querySelector(".ds-demo-button");
var btnDSSN = document.querySelector(".ds-sn-button");
var btnBS = document.querySelector(".bs-button");
var btnRunit = document.querySelector(".runit-button");

// Get the <span> element that closes the modal
var spanDSDemo = document.getElementsByClassName("close")[0];
var spanDSSN = document.getElementsByClassName("close")[1];
var spanBS = document.getElementsByClassName("close")[2];
var spanRunit = document.getElementsByClassName("close")[3];

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

spanDSDemo.onclick = function() {
  modalDSDemo.style.display = "none";
};

spanDSSN.onclick = function() {
  modalDSSN.style.display = "none";
};

spanBS.onclick = function() {
  modalBS.style.display = "none";
};

spanRunit.onclick = function() {
  modalRunit.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modalDSDemo) {
    modalDSDemo.style.display = "none";
  }
  if (event.target == modalDSSN) {
    modalDSSN.style.display = "none";
  }
  if (event.target == modalBS) {
    modalBS.style.display = "none";
  }
  if (event.target == modalRunit) {
    modalRunit.style.display = "none";
  }
};

// slide show 1
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// slide show 2
var slideIndex = 1;
showDivs2(slideIndex);

function plusDivs2(n) {
  showDivs2((slideIndex += n));
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// slide show 3
var slideIndex = 1;
showDivs3(slideIndex);

function plusDivs3(n) {
  showDivs3((slideIndex += n));
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// slide show 4
var slideIndex = 1;
showDivs4(slideIndex);

function plusDivs4(n) {
  showDivs4((slideIndex += n));
}

function showDivs4(n) {
  var i;
  var x = document.getElementsByClassName("mySlides4");

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// copy email
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
