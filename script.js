const { innerHeight } = window;

// zoom-out
gsap.from("#zoom-out h2", {
    scale: 50, stagger: 0.25, duration: 3,
    scrollTrigger: {
        trigger: "#zoom-out",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
});

// zoom-in
gsap.to("#zoom-in h2", {
    scale: 100, stagger: 0.25, duration: 3,
    scrollTrigger: {
        trigger: "#zoom-in",
        pin: true,
        end: `+=${innerHeight * 1.3}`,
        scrub: 3
    }
});