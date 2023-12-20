import {gsap} from 'gsap';
import {asideMenu, mainContent, overlay, toggleBtn} from "./variables";

export function statusToggleButton({currentTarget}) {
  currentTarget.classList.toggle('active');
  currentTarget.classList.toggle('inactive');
  animateElementTap(currentTarget);
}
export function animateMenuItemIconMouseEnter(target) {
  const iconSVG = target.querySelector(".menu-item__icon");
  if (iconSVG) {
    gsap.killTweensOf(iconSVG);
    gsap.to(iconSVG, {
      duration: 0.3
    });
    const iconSVGPath = target.querySelectorAll(".menu-item__icon path");
    iconSVGPath.forEach(path => {
      gsap.to(iconSVGPath, {
        duration: 0.3,
        stroke: "#fff",
      });
    });
  }
}
export function animateMenuItemIconMouseLeave(target) {
  const iconSVG = target.querySelector(".menu-item__icon");
  if (iconSVG) {
    gsap.killTweensOf(iconSVG);
    gsap.to(iconSVG, {
      duration: 0.3
    });
  }
  const iconSVGPath = target.querySelectorAll(".menu-item__icon path");
  gsap.killTweensOf(iconSVGPath);
  iconSVGPath.forEach(path => {
    gsap.to(iconSVGPath, {
      duration: 0.3,
      stroke: "#9197B3",
    });
  });

}
export function animateMenuItemArrowMouseEnter(target) {
  const arrowSVG = target.querySelector(".menu-item__arrow");
  if (arrowSVG) {
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
  if (arrowSVG) {
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
export function animateElementTap(target) {
  gsap.to(target, {
    scale: .95,
    duration: 0.15,
    ease: "power1.out",
    onComplete: () => {
      gsap.to(target, {
        scale: 1.05,
        duration: 0.2,
        delay: 0.1
      });
    }
  });
  // gsap.fromTo(target,
  //   {
  //     scale: 0.95,
  //     duration: 0.3,
  //   },
  //   {
  //     scale: 1.05,
  //     duration: 0.3,
  //   });
}
export function animateElementTapForMobileDeviseTouchStart(target) {
  gsap.to(target, {
    background: '#5932EA',
    duration: 0.04
  })
  animateMenuItemTextMouseEnter(target);
  animateMenuItemIconMouseEnter(target);
  animateElementTap(target);
}
export function animateElementTapForMobileDeviseTouchEnd(target) {
  gsap.to(target, {
    background: '#FFFFFF',
    duration: 0.02
  })
  animateMenuItemTextMouseLeave(target);
  animateMenuItemIconMouseLeave(target);
  animateElementTap(target);
}
export const handleVisibility = (visible) => {
  if (visible) {
    gsap.to(asideMenu, {
      x: '0%',
      duration: 0.2,
      flex: '1 2',
      minWidth: '200px',
      opacity: 1,
      position: 'relative'
    });
    gsap.to(toggleBtn, {
      rotateX: '0',
      left: '-2rem',
    })
    gsap.to(overlay, {
      visibility: 'hidden',
      opacity: 0,
      duration: 0.2,
    });
    window.isMenuClosed.value = false;
  } else {
    window.isMenuClosed.value = true;
    gsap.to(asideMenu, {
      x: '-150%',
      duration: 0.2,
      flex: '0',
      minWidth: '0',
      opacity: 0,
    });
    gsap.to(mainContent, {width: '100%', duration: 0.2});
    gsap.to(toggleBtn, {
      rotateX: '180deg',
      left: '-1rem',
    })

    gsap.to(overlay, {
      visibility: 'hidden',
      opacity: 0,
      duration: 0.2,
    });
  }

  window.menuVisible.value = visible;
}

