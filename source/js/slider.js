'use strict';

(function () {

    var track = document.querySelector('.carousel__track');
    var slidesGroup = track.querySelectorAll('.carousel__slide');
    var dotsNav = document.querySelector('.carousel__nav');
    var dotsGroup = dotsNav.querySelectorAll('.carousel__indicator');

    var slides = [];
    var dots = [];

    var fillArray = function (array, groupElement) {
        groupElement.forEach(function (element) {
            array.push(element);
        });
    };

    fillArray(slides, slidesGroup);
    fillArray(dots, dotsGroup);

    var slideWidth = slides[0].getBoundingClientRect().width;

    // arrange the slides next to one another

    var setSlidePosition = function (slide, index) {
        slide.style.left = slideWidth * index + 'px';
    };

    slides.forEach(setSlidePosition);

    var moveToSlide = function (track, currentSlide, targetSlide) {
        if (targetSlide) {
            track.style.transform = 'translateX( -' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        }
    };

    var updateDots = function (currentDot, targetDot) {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    };

    dotsNav.addEventListener('click', function (evt) {
        // what indicatos was clicked on?
        var targetDot = evt.target.closest('button');

        if (!targetDot) return;

        var currentSlide = track.querySelector('.current-slide');
        var currentDot = dotsNav.querySelector('.current-slide');
        var targetIndex = dots.indexOf(evt.target);
        var targetSlide = slides[targetIndex];

        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
    });
})();
