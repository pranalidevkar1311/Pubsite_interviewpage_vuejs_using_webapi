

//!function (d) {

//    var itemClassName = "carousel__div";
//    items = d.getElementsByClassName(itemClassName),
//        totalItems = items.length,
//        slide = 0,
//        moving = true;

//    function setInitialClasses() {
//        items[totalItems - 1].classList.add("prev");
//        items[0].classList.add("active");
//        items[1].classList.add("next");


//    }

//    function setEventListeners() {
//        var next = d.getElementsByClassName('carousel__button--next')[0],
//            prev = d.getElementsByClassName('carousel__button--prev')[0];

//        next.addEventListener('click', moveNext);
//        prev.addEventListener('click', movePrev);
//    }

//    function disableInteraction() {
//        moving = true;

//        setTimeout(function () {
//            moving = false;
//        }, 500);
//    }

//    function moveCarouselTo(slide) {

//        if (!moving) {

//            disableInteraction();

//            var newPrevious = slide - 1,
//                newNext = slide + 1,
//                oldPrevious = slide - 1,
//                oldNext = slide + 1;

//            if (totalItems - 1 > 0) {

//                if (newPrevious <= 0) {
//                    oldPrevious = totalItems - 1;
//                } else if (newNext >= totalItems - 1) {
//                    oldNext = 0;
//                }

//                if (slide === 0) {
//                    newPrevious = totalItems - 1;
//                    oldPrevious = totalItems - 1;
//                    oldNext = slide + 1;
//                } else if (slide === totalItems - 1) {
//                    newPrevious = slide - 1;
//                    newNext = 0;
//                    oldNext = 1;
//                }

//                items[oldPrevious].className = itemClassName;
//                items[oldNext].className = itemClassName;

//                // Add the new classes
//                items[newPrevious].className = itemClassName + " prev";
//                items[slide].className = itemClassName + " active";
//                items[newNext].className = itemClassName + " next";
//            }
//        }
//    }



//    function moveNext() {
//        if (!moving) {
//            if (slide === totalItems - 1) {
//                slide = 0;
//            } else {
//                slide++;
//            }

//            moveCarouselTo(slide);
//        }
//    }


//    function movePrev() {

//        if (!moving) {

//            if (slide === 0) {
//                slide = totalItems - 1;
//            } else {
//                slide--;
//            }
//            moveCarouselTo(slide);
//        }
//    }

//    function movePrev() {

//        if (!moving) {

//            if (slide === 0) {
//                slide = totalItems - 1;
//            } else {
//                slide--;
//            }
//            moveCarouselTo(slide);
//        }
//    }

//    function initCarousel() {
//        setInitialClasses();
//        setEventListeners();
//        moving = false;



//    }



//    initCarousel();



//}(document);

// Slider Second
!function (s) {

    var itemClassName2 = "carousel2__div";
    items2 = s.getElementsByClassName(itemClassName2),
        totalItems2 = items2.length,
        slide2 = 0,
        moving2 = true;


    function setInitialClasses2() {

        items2[totalItems2 - 1].classList.add("prev");
        items2[0].classList.add("active");
        items2[1].classList.add("next");
    }



    function setEventListeners2() {
        var next2 = s.getElementsByClassName('carousel2__button--next')[0],
            prev2 = s.getElementsByClassName('carousel2__button--prev')[0];

        next2.addEventListener('click', moveNext2);
        prev2.addEventListener('click', movePrev2);
    }

    function disableInteraction2() {
        moving2 = true;

        setTimeout(function () {
            moving2 = false;
        }, 500);
    }


    function moveCarouselTo2(slide2) {

        if (!moving2) {

            disableInteraction2();

            var newPrevious2 = slide2 - 1,
                newNext2 = slide2 + 1,
                oldPrevious2 = slide2 - 1,
                oldNext2 = slide2 + 1;

            if (totalItems2 - 1 > 0) {

                if (newPrevious2 <= 0) {
                    oldPrevious2 = totalItems2 - 1;
                } else if (newNext2 >= totalItems2 - 1) {
                    oldNext2 = 0;
                }

                if (slide2 === 0) {
                    newPrevious2 = totalItems2 - 1;
                    oldPrevious2 = totalItems2 - 1;
                    oldNext2 = slide2 + 1;
                } else if (slide2 === totalItems2 - 1) {
                    newPrevious2 = slide2 - 1;
                    newNext2 = 0;
                    oldNext2 = 1;
                }


                items2[oldPrevious2].className = itemClassName2;
                items2[oldNext2].className = itemClassName2;

                // Add the new classes
                items2[newPrevious2].className = itemClassName2 + " prev";
                items2[slide2].className = itemClassName2 + " active";
                items2[newNext2].className = itemClassName2 + " next";
            }
        }
    }

    function moveNext2() {

        if (!moving2) {

            if (slide2 === totalItems2 - 1) {
                slide2 = 0;
            } else {
                slide2++;
            }

            moveCarouselTo2(slide2);
        }
    }


    function movePrev2() {

        if (!moving2) {

            if (slide2 === 0) {
                slide2 = totalItems2 - 1;
            } else {
                slide2--;
            }
            moveCarouselTo2(slide2);
        }
    }


    function initCarousel2() {
        setInitialClasses2();
        setEventListeners2();
        moving2 = false;
    }


    initCarousel2();

}(document);

// Slider 3

//!function (c) {

//    var itemClassName3 = "carousel3__div";
//    items3 = c.getElementsByClassName(itemClassName3),
//        totalItems3 = items3.length,
//        slide3 = 0,
//        moving3 = true;


//    function setInitialClasses3() {

//        items3[totalItems3 - 1].classList.add("prev");
//        items3[0].classList.add("active");
//        items3[1].classList.add("next");
//    }



//    function setEventListeners3() {
//        var next3 = c.getElementsByClassName('carousel3__button--next')[0],
//            prev3 = c.getElementsByClassName('carousel3__button--prev')[0];

//        next3.addEventListener('click', moveNext3);
//        prev3.addEventListener('click', movePrev3);
//    }

//    function disableInteraction3() {
//        moving3 = true;

//        setTimeout(function () {
//            moving3 = false;
//        }, 500);
//    }


//    function moveCarouselTo3(slide3) {

//        if (!moving3) {

//            disableInteraction3();

//            var newPrevious3 = slide3 - 1,
//                newNext3 = slide3 + 1,
//                oldPrevious3 = slide3 - 1,
//                oldNext3 = slide3 + 1;

//            if (totalItems3 - 1 > 0) {

//                if (newPrevious3 <= 0) {
//                    oldPrevious3 = totalItems3 - 1;
//                } else if (newNext3 >= totalItems3 - 1) {
//                    oldNext3 = 0;
//                }

//                if (slide3 === 0) {
//                    newPrevious3 = totalItems3 - 1;
//                    oldPrevious3 = totalItems3 - 1;
//                    oldNext3 = slide3 + 1;
//                } else if (slide3 === totalItems3 - 1) {
//                    newPrevious3 = slide3 - 1;
//                    newNext3 = 0;
//                    oldNext3 = 1;
//                }


//                items3[oldPrevious3].className = itemClassName3;
//                items3[oldNext3].className = itemClassName3;

//                // Add the new classes
//                items3[newPrevious3].className = itemClassName3 + " prev";
//                items3[slide3].className = itemClassName3 + " active";
//                items3[newNext3].className = itemClassName3 + " next";
//            }
//        }
//    }

//    function moveNext3() {

//        if (!moving3) {

//            if (slide3 === totalItems3 - 1) {
//                slide3 = 0;
//            } else {
//                slide3++;
//            }

//            moveCarouselTo3(slide3);
//        }
//    }


//    function movePrev3() {

//        if (!moving3) {

//            if (slide3 === 0) {
//                slide3 = totalItems3 - 1;
//            } else {
//                slide3--;
//            }
//            moveCarouselTo3(slide3);
//        }
//    }


//    function initCarousel3() {
//        setInitialClasses3();
//        setEventListeners3();
//        moving3 = false;
//    }


//    initCarousel3();

//}(document);



