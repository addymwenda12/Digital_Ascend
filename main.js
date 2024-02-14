//Get the preloader from the DOM
const preloader = document.querySelector(".preloader");

//Wait for all page content to be loaded
document.addEventListener("DOMContentLoaded", () => {
	//Wait another half second
	setTimeout(() => {
		//Preloader fade out animation
		gsap.to(".preloader", 
		{
			opacity: 0, //Fade out
			duration: 2,
			//Once the preloader has faded out
			onComplete() {
				//Remove rotationg CSS animation
				preloader.style.animation = "none";
				//Hide the preloader
				preloader.style.display = "none";
			},
		},
		);
	}, 500);

	//Bg image animation
	gsap.fromTo(".bg-image", 
	//Animate from transparent
	{opacity: 0},
	//To visible
	{
		opacity: 1, 
		ease: "power3.out", //Easing
		duration: 1.5, //Animation duration
		delay: 2 //Animation delay
	}
	);

	//Title animations
	gsap.fromTo(".title h1", 
	{opacity: 0, y: 100,},
	{opacity: 1, y: 0, ease: "power3.out", duration: 1, delay: 3}
	);

	//Title animations
	gsap.fromTo(".title h2", 
	{opacity: 0, y: 100,},
    {opacity: 1, y: 0, ease: "power2.out", duration: 0.7, delay: 3.3}
	);

	//Link animations
	gsap.fromTo(".menu a", 
    {opacity: 0, x: 30,},
    {opacity: 1, x: 0, duration: 0.4, stagger: 0.3, delay: 3.5}
	);

	//Brand animation
	gsap.fromTo(".brand", 
    {opacity: 0, x: -50,},
    {opacity: 1, x: 0, duration: 0.4, delay: 3.5}
	);

	//Button animation
	gsap.fromTo(".btn", 
    {opacity: 0, y: 50,},
    {opacity: 1, y: 0, duration: 0.4, delay: 4.5}
	);

	//Social icon animations
	gsap.fromTo(".social a", 
    {opacity: 0, y: 30,},
    {opacity: 1, y: 0, duration: 0.4, stagger: 0.3, delay: 5}
	);
});
