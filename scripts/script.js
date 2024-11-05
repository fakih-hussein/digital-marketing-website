
gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".logo").forEach((logo) => {
    gsap.fromTo(logo, 
        { opacity: 0, y: 50 },  // Start state: invisible and slightly down
        {
            opacity: 1, y: 0,    // End state: visible and in position
            scrollTrigger: {
                trigger: logo,
                start: "top 65%",   // When the top of the logo is at 80% of the viewport
                end: "top 20%",     // When the top of the logo is at 20% of the viewport
                toggleActions: "play reverse play reverse", // Play animation on enter and reverse on leave
                markers: false       // Set to true for visual markers (for debugging)
            },
            duration: 0.6,         // Duration of the fade effect
            ease: "power1.out"     
        }
    );
});
