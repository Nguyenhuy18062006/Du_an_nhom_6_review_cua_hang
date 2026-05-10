// Lấy phần tử slider
var slider = document.getElementById("slider");

// Nhân đôi nội dung để tạo hiệu ứng vòng lặp
slider.innerHTML = slider.innerHTML + slider.innerHTML;

// Tắt smooth scroll mặc định, sẽ bật thủ công khi cần
slider.style.scrollBehavior = "auto";

// Biến trạng thái
var userInteracting = false;

// Lấy chiều rộng của một card
function getCardWidth() {
  var card = slider.querySelector(".card");
  if (card) {
    return card.offsetWidth + 20;
  }
  return 270;
}

// Kiểm tra và nhảy về điểm đối xứng để tạo vòng lặp vô tận
function checkLoop() {
  var half = slider.scrollWidth / 2;

  if (slider.scrollLeft >= half) {
    slider.style.scrollBehavior = "auto";
    slider.scrollLeft = slider.scrollLeft - half;
  }

  if (slider.scrollLeft < 0) {
    slider.style.scrollBehavior = "auto";
    slider.scrollLeft = slider.scrollLeft + half;
  }
}

// Hàm tự động cuộn từng frame
function autoSlide() {
  if (userInteracting === false) {
    slider.scrollLeft = slider.scrollLeft + 0.5;
    checkLoop();
  }
  requestAnimationFrame(autoSlide);
}

// Bắt đầu tự động cuộn
autoSlide();

// Xử lý nút Next
function handleNext() {
  userInteracting = true;
  slider.style.scrollBehavior = "smooth";
  slider.scrollLeft = slider.scrollLeft + getCardWidth();

  setTimeout(function () {
    checkLoop();
    userInteracting = false;
  }, 400);
}

// Xử lý nút Prev
function handlePrev() {
  userInteracting = true;
  slider.style.scrollBehavior = "smooth";
  slider.scrollLeft = slider.scrollLeft - getCardWidth();

  setTimeout(function () {
    checkLoop();
    userInteracting = false;
  }, 400);
}

// Gắn sự kiện cho nút
document.querySelector(".next").onclick = handleNext;
document.querySelector(".prev").onclick = handlePrev;
