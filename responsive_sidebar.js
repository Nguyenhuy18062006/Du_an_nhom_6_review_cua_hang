//resposive sidebar
const hamburgerBtn = document.getElementById("hamburgerBtn");
const sideBar = document.querySelector(".sideBar");
const overlay = document.getElementById("sidebarOverlay");

function openSidebar() {
  sideBar.classList.add("open");
  overlay.classList.add("active");
  hamburgerBtn.textContent = "✕"; //Dang loi khong hien thi duoc
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  sideBar.classList.remove("open");
  overlay.classList.remove("active");
  hamburgerBtn.textContent = "☰";
  document.body.style.overflow = "";
}

hamburgerBtn.addEventListener("click", function () {
  if (sideBar.classList.contains("open")) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

overlay.addEventListener("click", closeSidebar);

// Đóng khi click vào link trong sidebar
sideBar.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    closeSidebar();
  });
});
