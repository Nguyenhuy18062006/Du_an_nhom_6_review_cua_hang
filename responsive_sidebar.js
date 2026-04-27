//resposive sidebar
const hamburgerBtn = document.getElementById("hamburgerBtn");
const sideBar = document.querySelector(".sideBar");
const overlay = document.getElementById("sidebarOverlay");

function openSidebar() {
  sideBar.classList.add("open");
  overlay.classList.add("active");
  hamburgerBtn.textContent = "✕";
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  sideBar.classList.remove("open");
  overlay.classList.remove("active");
  hamburgerBtn.textContent = "☰";
  document.body.style.overflow = "";
}

hamburgerBtn.addEventListener("click", () => {
  sideBar.classList.contains("open") ? closeSidebar() : openSidebar();
});

overlay.addEventListener("click", closeSidebar);

// Đóng khi click vào link trong sidebar
sideBar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeSidebar);
});
