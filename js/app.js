import {gsap} from 'gsap';
import {
  animateMenuItemArrowMouseEnter, animateMenuItemArrowMouseLeave,
  animateMenuItemIconMouseEnter,
  animateMenuItemIconMouseLeave,
  animateMenuItemTextMouseEnter,
  animateMenuItemTextMouseLeave
} from './functions';
const menuItem = document.querySelectorAll('.menu-item');
const userContainer = document.querySelector('.user__container');
menuItem.forEach((menuItem) => {
  menuItem.addEventListener('mouseenter', function({target}) {
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
  menuItem.addEventListener('mouseleave', function({target}) {
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
  menuItem.addEventListener('click', function({target}) {
    gsap.killTweensOf(this);
    gsap.fromTo(this,
      {
        scale: 0.95,
        duration: 0.3,
        // background: '#433C3A',
      },
      {
        scale: 1.05,
        duration: 0.3,
        // background: 'transparent',
        // delay: 0.3,
      });
    // if (target) {
    //   animateMenuItemTextOnClick(target);
    //   animateMenuItemIconOnClick(target);
    //   animateMenuItemArrowOnClick(target);
    // }
  });
})
userContainer.addEventListener('mouseenter', function() {
  gsap.killTweensOf(this);
  gsap.to(this, {
    // transform: "translate(50%,50%)",
    paddingLeft: '2rem',
    border: "1px solid rgba(145, 151, 179, 0.5)",
    duration:0.2
  });
});
userContainer.addEventListener('mouseleave', function() {
  gsap.killTweensOf(this);
  gsap.to(this, {
    // transform: "translate(0,0)",
    paddingLeft: '0',
    border: "1px solid rgba(145, 151, 179, 0.01)",
  });
});
