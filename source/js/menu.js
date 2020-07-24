'use strict';

(function () {
  var buttonMenu = document.querySelectorAll('.nav__toggle');

  var addClassToNav = function () {
    var nav = document.querySelectorAll('.nav--closed');
    nav.forEach(function (items) {
      items.classList.toggle('nav--opened');
    });
  };

  var addClassToMenu = function () {
    var menu = document.querySelectorAll('.menu--closed');
    menu.forEach(function (items) {
      items.classList.toggle('menu--opened');
    });
  };

  var buttonMenuHandler = function (menu) {
    menu.addEventListener('click', function (evt) {
      evt.preventDefault();
      addClassToNav();
      addClassToMenu();
    });
  };

  buttonMenu.forEach(function (item) {
    buttonMenuHandler(item);
  });

})();
