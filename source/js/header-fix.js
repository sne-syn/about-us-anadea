'use strict';

(function () {
    var header = document.querySelector('.header');
    var headerHeight = header.clientHeight;

    var fixHeader = function () {
        if (window.scrollY > headerHeight / 5) {
            header.classList.add('header--fix');
        } else {
            header.classList.remove('header--fix');
        }
    };

    window.addEventListener('scroll', fixHeader);
})();
