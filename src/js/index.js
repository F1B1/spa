import Swiper from "swiper"
import { Navigation, Pagination, Parallax, Autoplay, Controller, FreeMode} from "swiper/modules";

document.addEventListener('DOMContentLoaded',()=>{

    const menuOpen = document.querySelectorAll('.menu-open');
    const menu = document.querySelector('.menu');
    const menuClose = document.querySelector('.menu-close');

    menuOpen.forEach(openmenu => {
        openmenu.addEventListener("click", function(e) {
            menu.classList.add('active')
            document.body.classList.add('block-scroll')
        });
    });

    menuClose.addEventListener("click", function(e) {
        menu.classList.remove('active')
        document.body.classList.remove('block-scroll')
    });

    const cityOpen =document.querySelectorAll('.city-open');
    const cityModal = document.querySelector('.city__popup');
    const cityBody = document.querySelector('.city__body');
    const cityTown = document.querySelector('.header__town');
    const cityButton= document.querySelector('.city__button')

    cityModal.addEventListener('click',(e)=>{
		if(e.target === cityBody || e.target.getAttribute('data-close') === '' || e.target === cityButton){
			closeModal()
		}
	})

    cityOpen.forEach(city => {
        city.addEventListener("click", function(e) {
            showModal()
        });
    });


    function showModal(){
        cityModal.classList.add('active')
        document.body.classList.add('block-scroll')
    }

    function closeModal(){
        cityModal.classList.remove('active')
        document.body.classList.remove('block-scroll')
    }


    document.querySelectorAll('.custom-select').forEach(customSelect => {
        const customSelectTrigger = customSelect.querySelector('.custom-select-trigger');
        const customOptions = customSelect.querySelector('.custom-options');
        const customArrow = customSelect.querySelector('.select__arrow');
    
        function toggleMenu(e) {
            e.stopPropagation();
            customSelectTrigger.classList.toggle('open');
            customOptions.classList.toggle('open');
            customSelect.classList.toggle('open');
        }
    
        customSelectTrigger.addEventListener('click', toggleMenu);
        customArrow.addEventListener('click', toggleMenu);
    
        customSelect.querySelectorAll('.custom-option').forEach(option => {
            option.addEventListener('click', function () {
                customSelectTrigger.textContent = this.textContent;
                cityTown.textContent = this.textContent;
                customOptions.classList.remove('open');
                customSelectTrigger.classList.remove('open');
                customSelect.classList.remove('open');
            });
        });
    });
    
    document.addEventListener('click', function (e) {
        document.querySelectorAll('.custom-select').forEach(customSelect => {
            const customSelectTrigger = customSelect.querySelector('.custom-select-trigger');
            const customOptions = customSelect.querySelector('.custom-options');
    
            if (!customSelect.contains(e.target)) {
                customOptions.classList.remove('open');
                customSelectTrigger.classList.remove('open');
                customSelect.classList.remove('open');
            }
        });
    });


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
            on: {
                slideChange: () => {
                    updatePaginationBars(
                        getSwiper,
                        document.querySelector('.pagination-bar-increase-1'),
                        document.querySelector('.pagination-bar-decrease-1')
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
            getSwiper,
            document.querySelector('.pagination-bar-increase-1'),
            document.querySelector('.pagination-bar-decrease-1')
        );
    }

    

    const tabsSwiper = new Swiper('.place__list', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
        breakpoints: {
            991: {
                spaceBetween: 0,
            },
        },
    });


    const contentSwiper = new Swiper('.place__swiper', {
        modules:[Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.place__arrow-next',
            prevEl: '.place__arrow-prev',
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
                updatePaginationBars(
                    contentSwiper,
                    document.querySelector('.pagination-bar-increase-2'),
                    document.querySelector('.pagination-bar-decrease-2')
                );
            },
        },
    });

    updatePaginationBars(
        contentSwiper,
        document.querySelector('.pagination-bar-increase-2'),
        document.querySelector('.pagination-bar-decrease-2')
    );

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
        navigation:{
            nextEl: '.kinds__arrow-next',
            prevEl: '.kinds__arrow-prev',
        },
        on: {
            slideChange: () => {
                updatePaginationBars(
                    kindSwiper,
                    document.querySelector('.pagination-bar-increase-3'),
                    document.querySelector('.pagination-bar-decrease-3')
                );
            },
        },
    });
    updatePaginationBars(
        kindSwiper,
        document.querySelector('.pagination-bar-increase-3'),
        document.querySelector('.pagination-bar-decrease-3')
    );

    const suitableSwiper = new Swiper('.suitable__menu', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: true,
    });

    const suitableActionSwiper = new Swiper('.suitable__menu-action', {
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
})