// const greeting = document.getElementById("greeting");

// greeting.style.textAlign = "center";
// greeting.style.marginTop = "5px";
// greeting.style.marginBottom = "5px";
// greeting.style.fontSize = "30px";
// greeting.style.fontFamily = "arial black, sans-serif";
// greeting.style.color = "#4c0505";
// greeting.style.border = "2px solid #07340aff";


// const username = window.prompt("What's your name?", "Guest");
// greeting.innerHTML = "Welcome to my website, " + username + "!";


document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Initial display
  showSlide(currentSlide);

  // Change slide every 5 seconds (adjust as needed)
  setInterval(nextSlide, 7000);
});