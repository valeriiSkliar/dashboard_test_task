import {gsap} from 'gsap';
import {
  animateElementTap,
  animateMenuItemArrowMouseEnter,
  animateMenuItemArrowMouseLeave,
  animateMenuItemIconMouseEnter,
  animateMenuItemIconMouseLeave,
  animateMenuItemTextMouseEnter,
  animateMenuItemTextMouseLeave,
} from './functions';
import {resizeObserver} from "./resizeObserver";
import {asideMenu, mainContent, menuItem, overlay, toggleBtn, userContainer} from "./variables";
resizeObserver.observe(document.body)
menuItem.forEach((menuItem) => {
  menuItem.addEventListener('mouseenter', function ({target}) {
    gsap.killTweensOf(this);
    gsap.to(this, {
      scale: 1.05,
      duration: 0.2,
      background: '#5932EA',
    });
    if (target) {
      animateMenuItemTextMouseEnter(target);
      animateMenuItemIconMouseEnter(target);
      animateMenuItemArrowMouseEnter(target);

    }
  });
  menuItem.addEventListener('mouseleave', function ({target}) {
    gsap.killTweensOf(this);
    gsap.to(this, {
      scale: 1.0,
      duration: 0.1,
      background: 'transparent',
    });
    if (target) {
      animateMenuItemTextMouseLeave(target);
      animateMenuItemIconMouseLeave(target);
      animateMenuItemArrowMouseLeave(target);
    }
  });
  menuItem.addEventListener('click', function ({currentTarget}) {
    gsap.killTweensOf(this);
    animateElementTap(currentTarget);
  });
  menuItem.addEventListener('touchstart', function ({currentTarget}) {
    gsap.killTweensOf(this);
    animateElementTap(currentTarget);
  });
  menuItem.addEventListener('touchend', function ({currentTarget}) {
    gsap.killTweensOf(this);
    animateElementTap(currentTarget);
  });

})
userContainer.addEventListener('click', function ({currentTarget}) {
  gsap.killTweensOf(this);
  animateElementTap(currentTarget)
});
userContainer.addEventListener('mouseenter', function () {
  gsap.killTweensOf(this);
  gsap.to(this, {
    paddingLeft: '2rem',
    border: "1px solid rgba(145, 151, 179, 0.5)",
    duration: 0.2
  });
});
userContainer.addEventListener('mouseleave', function () {
  gsap.killTweensOf(this);
  gsap.to(this, {
    // transform: "translate(0,0)",
    paddingLeft: '0',
    border: "1px solid rgba(145, 151, 179, 0.01)",
  });
});
toggleBtn.addEventListener('click', function () {
  console.log('toggle' + window.isMenuClosed.value)
  if (window.isMenuClosed.value) {
    gsap.to(asideMenu, {
      position: 'absolute',
      zIndex: 8000,
      x: '0%',
      duration: 0.2,
      flex: '1 2',
      minWidth: '200px',
      opacity: 1,
    });
    gsap.fromTo(toggleBtn, {
        rotateX: '180deg',
        left: '-1rem',
        opacity: 0,
      },
      {
        opacity: 1,
        rotateX: '0',
        left: 'calc(308px - 2rem)',
        // position:'absolute',
        zIndex: 9999,
      })
    gsap.to(overlay, {
      visibility: 'visible',
      opacity: 1,
      duration: 0.1,
    });
  }
  if (!window.isMenuClosed.value) {
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
    });

    gsap.to(overlay, {
      visibility: 'hidden',
      opacity: 0,
      duration: 0.2,
    });
  }
  window.isMenuClosed.value = !window.isMenuClosed.value;
});


