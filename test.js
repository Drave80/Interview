let slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
  showSlides((slideIndex = n));
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("list");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  
  let images = document.querySelectorAll(".image");
  if (slideIndex - 1 === 3) {
    images.forEach((img) => {
      img.style.top = "300px";
      img.style.left = "1000px";
    });
  } else {
    // Nếu không phải slideIndex - 1 = 3, trả lại vị trí ban đầu
    images.forEach((img) => {
      img.style.top = "420px";
      img.style.left = "-50px";
    });
}}


document.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    slideIndex++;
  } else {
    slideIndex--;
  }
  showSlides(slideIndex);
});

let images = document.querySelectorAll(".image");
let currentIndex = 0;
const cycle = [0, 1, 2, 3, 2, 1, 0];
const delay = 500;

function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.zIndex = 4;
      img.style.opacity = 1;
      img.classList.add("active");
    } else {
      img.style.zIndex = 1;
      img.style.opacity = 0;
      img.classList.remove("active");
    }
  });
}

function handleWheelEvent(event) {

  cycle.forEach((index, i) => {
    setTimeout(() => {
      currentIndex = index;
      showImage(currentIndex);
    }, i * delay);
  });
}


showImage(currentIndex);

document.addEventListener("wheel", handleWheelEvent);

document.addEventListener("click", handleWheelEvent);