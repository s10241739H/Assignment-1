let index = 0;

function displayImagesSlider() {
  let i;
  const images = document.getElementsByClassName("img_home");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index - 1].style.display = "block";
  setTimeout(displayImagesSlider, 4000);
}







function displayImagesOpacity() {
  var images = document.querySelectorAll(".merchimg img");

  for (var i = 0; i < images.length; i++) {
    images[i].style.opacity = "1";
  }
}

window.addEventListener("load", function () {
  displayImagesOpacity();
  displayImagesSlider();
});



function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
