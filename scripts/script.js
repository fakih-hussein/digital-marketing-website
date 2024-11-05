
gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".logo").forEach((logo) => {
    gsap.fromTo(logo, 
        { opacity: 0, y: 50 },  
        {
            opacity: 1, y: 0,    
            scrollTrigger: {
                trigger: logo,
                start: "top 65%",  
                end: "top 20%",     
                toggleActions: "play reverse play reverse",
                markers: false       
            },
            duration: 0.6,         
            ease: "power1.out"     
        }
    );
});

window.addEventListener("scroll", function() {
    const navbar = document.getElementById("nav-scroll");

    if (window.scrollY > 50) { 
        navbar.classList.add("scrolled"); 
    } else {
        navbar.classList.remove("scrolled"); 
    }
});
