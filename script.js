const slider = document.getElementById("slider");
// const cardWidth = 270;
function getCardWidth() {
  const card = slider.querySelector(".card");
  return card ? card.offsetWidth + 20 : 270;
}

// nhân đôi card
slider.innerHTML += slider.innerHTML;

slider.style.scrollBehavior = "smooth";

let isScrolling = false;

function checkLoop() {
  if (slider.scrollLeft >= slider.scrollWidth / 2) {
    slider.style.scrollBehavior = "auto";
    slider.scrollLeft -= slider.scrollWidth / 2;
    slider.style.scrollBehavior = "smooth";
  }
  if (slider.scrollLeft < 0) {
    slider.style.scrollBehavior = "auto";
    slider.scrollLeft += slider.scrollWidth / 2;
    slider.style.scrollBehavior = "smooth";
  }
}

let animationId;
let userInteracting = false;

function autoSlide() {
  if (!userInteracting) {
    slider.scrollLeft += 0.5;
    checkLoop();
  }
  animationId = requestAnimationFrame(autoSlide);
}

autoSlide();
// nút next
document.querySelector(".next").onclick = function () {
  userInteracting = true;
  slider.style.scrollBehavior = "smooth";
  slider.scrollLeft += getCardWidth();
  setTimeout(() => {
    checkLoop();
    userInteracting = false;
  }, 400);
};

// nút prev
document.querySelector(".prev").onclick = function () {
  userInteracting = true;
  slider.style.scrollBehavior = "smooth";
  slider.scrollLeft -= getCardWidth();
  setTimeout(() => {
    checkLoop();
    userInteracting = false;
  }, 400);
};
