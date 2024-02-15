//Register Scroll Trigger Plugin
gsap.registerPlugin(ScrollTrigger);

//Wait for everything on the page to load
window.addEventListener("DOMContentLoaded", () => {
  //Create gsap timeline
  const tl = gsap.timeline({delay: 1});
  //Add preloader fadeout animation
  tl.to(".preloader", {
    opacity: 0,
    ease: "power3.out",
    duration: 1,
  });
  //Hide the preloader after the animation is done
  tl.to(".preloader", {display: "none", duration: 0});
  //Add fade up animation to the main title
  tl.from("h1", {y: 100, opacity: 0});
  //Add fade up animation to the mouse scroll indicator
  tl.from(".mouse-scroll", {y: 50, opacity: 0});
});

//Banner parallax animation
gsap.to(".bg-image", {
  y: 200, //Move on the y axis
  scrollTrigger: {
    trigger: ".hero", //Use hero section as animation trigger
    start: "top top", //Set trigger start position
    scrub: true, //Have the animation follow the scroll position
  }
});

//Image parallax animations
const images = gsap.utils.toArray(".image img");
images.forEach(image => {
  gsap.to(image, {
    y: 200,
    scrollTrigger: {
      trigger: image.parentElement,
      scrub: true,
    }
  });
});

//Title fade up animations
const titles = gsap.utils.toArray("h2");
titles.forEach(title => {
  gsap.from(title, {
    y: 100,
    opacity: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: title,
    }
  });
});

//Initialize Lenis Smooth Scroll 
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//Mouse Tracker
//Get mouse tracker element
const tracker = document.querySelector(".tracker");

//Ammount by which the page is scrolled
let scrollAmmount = 0;
//X and Y coordinates
let yPos = 0;
let xPos = 0;

//Mouse tracker function
function mouseTracker() {
  /*Get the value by which the page has been 
  scrolled and also add the mouse position on 
  the y axis*/
  scrollAmmount = window.scrollY + yPos;
  //Set the tracker position with the new values
  tracker.style.top = `${scrollAmmount}px`;
  tracker.style.left = `${xPos}px`;
}

//Add a mousemove event to the entire window
window.addEventListener("mousemove", e => {
  //Delay the effect 
  setTimeout(() => {
    /*Get the mouse coordinates and subtract the 
    tracker width and height to have it in the 
    center of the mouse cursor*/
    yPos = e.clientY - tracker.offsetHeight / 2;
    xPos = e.clientX - tracker.offsetWidth / 2;
    //Call the mouseTracker function
    mouseTracker();
  }, 100);
});

//Add a scroll event to the entire window
window.addEventListener("scroll", () => {
  //Call the mouseTracker function
  mouseTracker();
});

//Select all links on the page
const links = document.querySelectorAll("a");

//Loop through each link
links.forEach(link => {
  //Hide the tracker when the mouse enters a link
  link.addEventListener("mouseenter", () => {
    tracker.style.display = "none";
  });
  //Show the tracker when the mouse leaves a link
  link.addEventListener("mouseleave", () => {
    tracker.style.display = "block";
  });
});

//Disable mouse tracker on touchscreen devices
if ('ontouchstart' in window || navigator.maxTouchPoints) {
  tracker.style.display = "none";
}

