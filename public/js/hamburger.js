const hamburgerButton = document.querySelector(".hamburger");
const navArea = document.querySelector(".nav-area");
hamburgerButton.addEventListener("click", () => {
  if (hamburgerButton.classList.contains("fa-bars")) {
    hamburgerButton.classList.remove("fa-bars");
    hamburgerButton.classList.add("fa-xmark");
    navArea.style.display = "block";
  } else {
    hamburgerButton.classList.remove("fa-xmark");
    hamburgerButton.classList.add("fa-bars");
    navArea.style.display = "none";
  }
});
