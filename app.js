const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

imgs.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset Opacity
  imgs.forEach((img) => (img.style.opacity = 1));

  // Change current image to src of clicked img
  current.src = e.target.src;

  // Add fade in class
  current.classList.add("fade-in");

  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
