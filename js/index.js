// Your code goes here
const bodySelect = document.querySelector("Body");

bodySelect.addEventListener("click", () => {
  bodySelect.style.backgroundColor = "orange";
});

bodySelect.addEventListener("dblclick", () => {
  bodySelect.style.backgroundColor = "white";
});
document.addEventListener("keydown", () => {
  bodySelect.style.textTransform = "uppercase";
});
document.addEventListener("keyup", () => {
  bodySelect.style.textTransform = null;
});

const logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener("mouseenter", () => {
  logoHeading.style.fontSize = "5rem";
});
logoHeading.addEventListener("mouseleave", () => {
  logoHeading.style.fontSize = "4rem";
});
logoHeading.addEventListener("click", (e) => {
  logoHeading.style.backgroundColor = "red";
  e.stopPropagation();
});
logoHeading.addEventListener("dblclick", (e) => {
  logoHeading.style.backgroundColor = null;
  e.stopPropagation();
});

const imageBus = document.querySelector("img");

window.addEventListener("resize", () => {
  imageBus.src =
    "https://static.fox13news.com/www.fox13news.com/content/uploads/2020/06/magic-school-bus.jpg";
});

const h2Select = document.querySelector("h2");

window.addEventListener("scroll", () => {
  h2Select.style.fontSize = "10rem";
  h2Select.style.fontFamily = "Times New Roman";
});

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("mouseenter", () => {
    image.style.border = "solid purple 2px";
  });
  image.addEventListener("mouseleave", () => {
    image.style.border = null;
  });
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("click");
  });
});
