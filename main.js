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


