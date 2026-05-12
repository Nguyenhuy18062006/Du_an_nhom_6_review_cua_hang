function setRating(n) {
  //click vào star nào thì n = sao đó nếu star[i] bé hơn n thì sáng còn lớn hơn n thì đen
  const stars = document.querySelectorAll("#stars span");
  for (let i = 0; i < stars.length; i++) {
    if (i < n) {
      stars[i].style.filter = "brightness(1)";
    } else {
      stars[i].style.filter = "grayscale(1)";
    }
  }
}
