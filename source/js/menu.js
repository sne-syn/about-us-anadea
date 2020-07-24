'use strict';

(function () {
  var header = document.querySelector('.header');
  var burgerButton = document.querySelector('.nav__toggle');

  var trapFocusOnModal = function (element) {
    var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled])');
    var firstFocusableEl = focusableEls[0];
    var lastFocusableEl = focusableEls[focusableEls.length - 1];
    var KEYCODE_TAB = 9;

    element.addEventListener('keydown', function (evt) {
      var isTabPressed = (evt.key === 'Tab' || evt.keyCode === KEYCODE_TAB);

      if (!isTabPressed) {
        return;
      }

      if (evt.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          evt.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          evt.preventDefault();
        }
      }

    });
  };

  var addClassToNav = function () {
    var nav = document.querySelector('.nav--closed');
    nav.classList.toggle('nav--opened');
    if (nav.classList.contains('nav--opened')) {
      trapFocusOnModal(header);
    }
  };

  var addClassToMenu = function () {
    var menu = document.querySelector('.menu--closed');
    menu.classList.toggle('menu--opened');
  };

  var buttonMenuHandler = function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      addClassToNav();
      addClassToMenu();
    });
  };

  buttonMenuHandler(burgerButton);
})();
