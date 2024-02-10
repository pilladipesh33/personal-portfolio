import gsap from "gsap";

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      xPercent: 0,
      duration: 0.8,
      backgroundColor: "#A37F61",
    })
      .to(transitionElement, {
        xPercent: 100,
        duration: 0.8,
        backgroundColor: "#638B95",
      })
      .to(
        transitionElement,
        {
          //animation here
        },
        "<",
      );
  }
};

export const animatePageOut = (href, router) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      xPercent: 100,
      duration: 0.8,
      backgroundColor: "#F4711F",
      borderTopLeftRadius: "50vh",
      borderBottomLeftRadius: "50vh",
    })
      .to(animationWrapper, {
        xPercent: 0,
        backgroundColor: "#B47D53",
        duration: 0.8,
        onComplete: () => {
          router.push(href);
        },
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      })
      .to(
        animationWrapper,
        {
          //animation here
        },
        "<",
      );
  }
};
