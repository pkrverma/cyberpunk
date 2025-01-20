// =================Parallax================
document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelectorAll(".parallax-layer").forEach((layer) => {
    const speed = parseFloat(layer.getAttribute("data-speed")) || 0.3;
    layer.style.transform = `translateY(${scrollY * speed}px)`;
  });
});


// Set the date we're counting down to
=======
// =================TIMER================
  
var countDownDate = new Date("Mar 8, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="timer"

  // ===========need to fix the timer to display in the format of days:hours:minutes:seconds==========
  // document.getElementById("timer").innerHTML = days + " : " + hours + " : "
  // + minutes + " : " + seconds + "  ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);



// =================Navigation Menu=================
function navFunction() {
  const navList = document.querySelector(".nav-list");
  const navToggler = document.querySelector(".nav-toggler");

  navToggler.addEventListener('click', toggleNav());

  function toggleNav() {
    navToggler.classList.toggle("open");
    navList.classList.toggle("active");
  }
}

// Initialize the navigation function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', navFunction);

function changeClass() {
  var x = document.getElementsByClassName('cyber-button-small');
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.Width;
  console.log(width);
  if (x.length > 0) {
    if (width <= 640) {
      x[0].className = 'cyber-button bg-red';
    } else {
      x[1].className = "cyber-button-small";
    }
  }
}