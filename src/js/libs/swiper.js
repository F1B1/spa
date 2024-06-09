import Swiper from "swiper"
import { Navigation, Pagination} from "swiper/modules";


export function expSwiper(){

    function updatePaginationBars(swiper, increaseBar, decreaseBar) {
        const totalSlides = swiper.slides.length - 1;
        const increment = 45 / totalSlides;
        const currentSlideIndex = swiper.realIndex; 
        const increasePercentage = 50 + (currentSlideIndex * increment);
        const decreasePercentage = 100 - increasePercentage;

        increaseBar.style.width = increasePercentage + '%';
        decreaseBar.style.width = decreasePercentage + '%';
    }

    if (window.innerWidth < 991) {
        const getSwiper = new Swiper('.get__swiper', {
            modules:[Navigation, Pagination],
            loop: false,
            observer: true,
            slidesPerView: 1.5,
            navigation:{
                nextEl: '.get__arrow-next',
                prevEl: '.get__arrow-prev',
            },
            pagination:{
                el:'.get__pagination',
            },
            breakpoints:{
                320:{
                    slidesPerView:1.2,
                    spaceBetween: 10,
                },
                479:{
                    slidesPerView: 1.5,
                    spaceBetween:20,
                }

            }
        });

    }


    const suitableItems = document.querySelectorAll('.suitable__item');

    function handleItemClick(event) {
        suitableItems.forEach(item => {
            item.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
    }

    suitableItems.forEach(item => {
        item.addEventListener('click', handleItemClick);
    });




    const tabsSwiper = new Swiper('.place__list', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
    });

    const contentSwiper = new Swiper('.place__swiper', {
        modules:[Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.place__arrow-next',
            prevEl: '.place__arrow-prev',
        },
        pagination:{
            el:'.place__pagination',
        },
        on: {
            slideChange: function () {
                const activeIndex = this.activeIndex;
                document.querySelectorAll('.place__item').forEach((item, index) => {
                    if (index === activeIndex) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
                tabsSwiper.slideTo(activeIndex);
            },
        },
    });

    document.querySelectorAll('.place__item').forEach((item, index) => {
        item.addEventListener('click', function () {
            contentSwiper.slideTo(index);
        });
    });

    const activeTabIndex = contentSwiper.activeIndex;
    document.querySelectorAll('.place__item').forEach((item, index) => {
        if (index === activeTabIndex) {
            item.classList.add('active');
        }
    });



    const kindSwiper = new Swiper('.kinds__body', {
        modules:[Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        navigation:{
            nextEl: '.kinds__arrow-next',
            prevEl: '.kinds__arrow-prev',
        },
        pagination:{
            el:'.kinds__pagination',
        },
    });


    const suitableSwiper = new Swiper('.suitable__menu', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
    });


    const alsoSwiper = new Swiper('.also__body', {
        modules:[Navigation, Pagination],
        slidesPerView: 1.5,
        navigation:{
            nextEl: '.also__arrow-next',
            prevEl: '.also__arrow-prev',
        },
        on: {
            slideChange: () => {
                updatePaginationBars(
                    alsoSwiper,
                    document.querySelector('.pagination-bar-increase-4'),
                    document.querySelector('.pagination-bar-decrease-4')
                );
            },
        },
        breakpoints:{
            320:{
                slidesPerView:1.2,
                spaceBetween: 10,
            },
            479:{
                slidesPerView: 1.5,
                spaceBetween:10,
            }

        }
    });

    updatePaginationBars(
        alsoSwiper,
        document.querySelector('.pagination-bar-increase-4'),
        document.querySelector('.pagination-bar-decrease-4')
    );

    const stepSwiper = new Swiper('.step__body', {
        modules:[Navigation, Pagination],
        slidesPerView: 1,
        navigation:{
            nextEl: '.step__arrow-next',
            prevEl: '.step__arrow-prev',
        },
        on: {
            slideChange: () => {
                updatePaginationBars(
                    stepSwiper,
                    document.querySelector('.pagination-bar-increase-5'),
                    document.querySelector('.pagination-bar-decrease-5')
                );
            },
        },
    });

    updatePaginationBars(
        stepSwiper,
        document.querySelector('.pagination-bar-increase-5'),
        document.querySelector('.pagination-bar-decrease-5')
    );


    const perceptionTextSwiper = new Swiper('.perception__menu', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
    });

    const perceptionSwiper = new Swiper('.perception__body', {
        modules:[Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 30,
        navigation:{
            nextEl: '.perception__arrow-next',
            prevEl: '.perception__arrow-prev',
        },
        on: {
            slideChange: function () {
                const activeIndex = this.activeIndex;
                document.querySelectorAll('.perception__item').forEach((item, index) => {
                    if (index === activeIndex) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
                perceptionTextSwiper.slideTo(activeIndex);
                updatePaginationBars(
                    perceptionSwiper,
                    document.querySelector('.pagination-bar-increase-6'),
                    document.querySelector('.pagination-bar-decrease-6')
                );
            },
        },
    });

    updatePaginationBars(
        perceptionSwiper,
        document.querySelector('.pagination-bar-increase-6'),
        document.querySelector('.pagination-bar-decrease-6')
    );

    document.querySelectorAll('.perception__item').forEach((item, index) => {
        item.addEventListener('click', function () {
            perceptionSwiper.slideTo(index);
        });
    });

    const activeIndex = contentSwiper.activeIndex;
    document.querySelectorAll('.perception__item').forEach((item, index) => {
        if (index === activeIndex) {
            item.classList.add('active');
        }
    });


    const reviewSwiper = new Swiper('.review__body', {
        modules:[Navigation, Pagination],
        slidesPerView: 1,
        navigation:{
            nextEl: '.review__arrow-next',
            prevEl: '.review__arrow-prev',
        },
        on: {
            slideChange: () => {
                updatePaginationBars(
                    reviewSwiper,
                    document.querySelector('.pagination-bar-increase-7'),
                    document.querySelector('.pagination-bar-decrease-7')
                );
            },
        },
        breakpoints:{
            320:{
                slidesPerView: 1,
                spaceBetween: 16,
            },
            576:{
                slidesPerView: 1.2,
                spaceBetween: 16,
            },
            991:{
                slidesPerView: 2,
                spaceBetween: 16,
            }
        }
    });

    updatePaginationBars(
        reviewSwiper,
        document.querySelector('.pagination-bar-increase-7'),
        document.querySelector('.pagination-bar-decrease-7')
    );

    const reviewToggles = document.querySelectorAll('.review__toggle');

    reviewToggles.forEach(toggle => {
        const reviewTextWrapper = toggle.previousElementSibling;

        if (reviewTextWrapper) {
            const fade = document.createElement('div');
            fade.className = 'review__fade';
            reviewTextWrapper.appendChild(fade);

            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                reviewTextWrapper.classList.toggle('active');

                if (reviewTextWrapper.classList.contains('active')) {
                    toggle.textContent = 'Свернуть отзыв';
                    fade.style.display = 'none';
                } else {
                    toggle.textContent = 'Читать отзыв полностью';
                    fade.style.display = 'block';
                }
            });
        }
    });

    const mapButtons = document.querySelectorAll('.place__map-btn');

    mapButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            const placeColumn = button.closest('.place__column');

            if (placeColumn) {
                placeColumn.classList.toggle('show');

                if (placeColumn.classList.contains('show')) {
                    button.textContent = 'Свернуть';
                } else {
                    button.textContent = 'Развернуть';
                }
            }
        });
    });


    const declarationwSwiper = new Swiper('.declaration__body', {
        modules:[Navigation, Pagination],
        slidesPerView: 1,
        navigation:{
            nextEl: '.declaration__arrow-next',
            prevEl: '.declaration__arrow-prev',
        },
        on: {
            slideChange: () => {
                updatePaginationBars(
                    declarationwSwiper,
                    document.querySelector('.pagination-bar-increase-8'),
                    document.querySelector('.pagination-bar-decrease-8')
                );
            },
        },
        breakpoints:{
            320:{
                slidesPerView: 2,
                spaceBetween: 10,
            },
            479:{
                slidesPerView: 3,
                spaceBetween: 10,
            },
            576:{
                slidesPerView: 4,
                spaceBetween: 16,
            },
            767:{
                slidesPerView: 6,
                spaceBetween: 16,
            }
        }
    });

    updatePaginationBars(
        declarationwSwiper,
        document.querySelector('.pagination-bar-increase-8'),
        document.querySelector('.pagination-bar-decrease-8')
    );

    Fancybox.bind('[data-fancybox="gallery"]', {
        on: {
            createSlide: (fancybox) => {
                const currentSlide = fancybox.getSlide();
                declarationwSwiper.slideTo(currentSlide.index, 0, false);
            },
            done: (fancybox) => {
                const currentSlide = fancybox.getSlide();
                declarationwSwiper.slideTo(currentSlide.index, 0, false);
            },
            change: (fancybox, slide) => {
                declarationwSwiper.slideTo(slide.index, 0, false);
            }
        }
    });

    const newsSwiper = new Swiper('.news__body', {
        modules:[Navigation, Pagination],
        slidesPerView: 1,
        navigation:{
            nextEl: '.news__arrow-next',
            prevEl: '.news__arrow-prev',
        },
        on: {
            slideChange: () => {
                updatePaginationBars(
                    newsSwiper,
                    document.querySelector('.pagination-bar-increase-9'),
                    document.querySelector('.pagination-bar-decrease-9')
                );
            },
        },
        breakpoints:{
            320:{
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            576:{
                slidesPerView: 1.6,
                spaceBetween: 16,
            },
            991:{
                slidesPerView: 3,
                spaceBetween: 16,
            }
        }
    });

    updatePaginationBars(
        newsSwiper,
        document.querySelector('.pagination-bar-increase-9'),
        document.querySelector('.pagination-bar-decrease-9')
    );

    const combineItems = document.querySelectorAll('.combine__item');

    function combineClick(event) {
        combineItems.forEach(item => {
            item.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
    }

    combineItems.forEach(item => {
        item.addEventListener('click', combineClick);
    });

    const timecombineItems = document.querySelectorAll('.combine__time-item');

    function timecombineClick(event) {
        timecombineItems.forEach(item => {
            item.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
    }

    timecombineItems.forEach(item => {
        item.addEventListener('click', timecombineClick);
    });
}