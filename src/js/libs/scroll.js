function headerScroll(){
    const headerElement = document.querySelector('.header')

    const callback = function (entries, boserver) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('scroll')
        } else {
            headerElement.classList.add('scroll')
        }
    }

    const headerObserver = new IntersectionObserver(callback)
    headerObserver.observe(headerElement)



    const menuOpen = document.querySelectorAll('.menu-open');
    const menu = document.querySelector('.menu');
    const menuClose = document.querySelector('.menu-close');

    function closeMenu(e) {
        if (e.target === menuClose || (!menu.contains(e.target) && !e.target.closest('.menu-open'))) {
            menu.classList.remove('active');
            document.body.classList.remove('block-scroll');
            document.removeEventListener('click', closeMenu);  
        }
    }

    menuOpen.forEach(openmenu => {
        openmenu.addEventListener("click", function(e) {
            menu.classList.add('active');
            document.body.classList.add('block-scroll');
            document.addEventListener('click', closeMenu); 
        });
    });

    menuClose.addEventListener("click", function(e) {
        menu.classList.remove('active');
        document.body.classList.remove('block-scroll');
        document.removeEventListener('click', closeMenu); 
    });
}

export default headerScroll