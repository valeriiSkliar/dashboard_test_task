import {gsap} from 'gsap';

export function animateMenuItemIconMouseEnter(target) {
  const iconSVG = target.querySelector(".menu-item__icon");
  if (iconSVG){
    gsap.killTweensOf(iconSVG);
    gsap.to(iconSVG, {
      duration: 0.3
    });
    const arrowSVGPath = target.querySelectorAll(".menu-item__icon path");
    arrowSVGPath.forEach(path => {
      gsap.to(arrowSVGPath, {
        duration: 0.3,
        stroke: "#fff",
      });
    });
  }
}
export function animateMenuItemIconMouseLeave(target) {
  const iconSVG = target.querySelector(".menu-item__icon");
  if (iconSVG){
    gsap.killTweensOf(iconSVG);
    gsap.to(iconSVG, {
      duration: 0.3
    });
  }
  const arrowSVGPath = target.querySelectorAll(".menu-item__icon path");
  gsap.killTweensOf(arrowSVGPath);
  arrowSVGPath.forEach(path => {
    gsap.to(arrowSVGPath, {
      duration: 0.3,
      stroke: "#9197B3",
    });
  });

}
export function animateMenuItemArrowMouseEnter(target) {
  const arrowSVG = target.querySelector(".menu-item__arrow");
  if (arrowSVG){
    gsap.killTweensOf(arrowSVG);
    gsap.to(arrowSVG, {
      x: -15,
      // fill: "#ffffff",
      duration: 0.3,

    });
    const arrowSVGPath = target.querySelector(".menu-item__arrow path");
    gsap.killTweensOf(arrowSVGPath);
    gsap.to(arrowSVGPath, {
      duration: 0.3,
      stroke: "#ffffff",
    });
  }
}
export function animateMenuItemArrowMouseLeave(target) {
  const arrowSVG = target.querySelector(".menu-item__arrow");
  if (arrowSVG){
    gsap.killTweensOf(arrowSVG);
    gsap.to(arrowSVG, {
      x: 0,
      duration: 0.3
    });
    const arrowSVGPath = target.querySelector(".menu-item__arrow path");
    gsap.killTweensOf(arrowSVGPath);
    gsap.to(arrowSVGPath, {
      duration: 0.3,
      stroke: "#9197B3",
    });
  }
}
export function animateMenuItemTextMouseEnter(target) {
  const text = target.querySelector(".menu-item__text");
  gsap.killTweensOf(text);
  gsap.to(text, {
    color: 'white'
  });
}
export function animateMenuItemTextMouseLeave(target) {
  const text = target.querySelector(".menu-item__text");
  gsap.killTweensOf(text);
  gsap.to(text, {
    color: '#9197B3'
  });
}
