function setRating(n) {
  const stars = document.querySelectorAll("#stars span");
  for (let i = 0; i < stars.length; i++) {
    if (i < n) {
      stars[i].style.filter = "brightness(1)";
    } else {
      stars[i].style.filter = "grayscale(1)";
    }
  }
}
