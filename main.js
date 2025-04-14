window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".Navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("Scrol-menu");
    } else {
      navbar.classList.remove("Scrol-menu");
    }
  });
  let displayvalues = document.querySelectorAll('.num');
let interval = 9000; 

displayvalues.forEach(element => {
  let startvalue = 0;
  let Endvalue = parseInt(element.getAttribute('data-value'));

  let duration = Math.floor(interval / Endvalue);

  let counter = setInterval(() => {
    startvalue += 1;
    element.textContent = startvalue;

    if (startvalue === Endvalue) {
      clearInterval(counter);
    }
  }, duration);
});



const slides = document.querySelectorAll('.slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 100}%)`;
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

setInterval(nextSlide, 3000); 

showSlide(currentIndex);



  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.3
  });


  document.querySelectorAll('.serviceanimation').forEach(el => {
    observer.observe(el);
  });



  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hidden');

 
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500); 
  });

