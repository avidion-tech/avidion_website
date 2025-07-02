import gsap from "gsap";

export const fadeInUp = (target: string | Element | Element[]) => {
  gsap.fromTo(
    target,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      // ease: "power3.out",
    }
  );
};

export const staggerFadeIn = (targets: string | Element[] | NodeList) => {
  gsap.fromTo(
    targets,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    }
  );
};
