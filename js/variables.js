export const asideMenu = document.getElementById('aside-menu');
export const mainContent = document.getElementById('mainContent');
export const toggleBtn = document.getElementById('toggleBtn');
export const menuItem = document.querySelectorAll('.menu-item');
export const statusButtons = document.querySelectorAll('td[data-label="Status"] button');
export const paginatorButtons = document.querySelectorAll('.paginator-list li button');
export const userContainer = document.querySelector('.user__container');
export const overlay = document.getElementById('overlay');


window.menuVisible = {
  _value: true,
  get value() {
    return this._value;
  },
  set value(val) {
    this._value = val;
  }
};
window.isMenuClosed = {
  _value: false,
  get value() {
    return this._value;
  },
  set value(val) {
    this._value = val;
  }
};
