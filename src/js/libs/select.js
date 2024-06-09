function selectCustom(){
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
                cityTown.textContent = this.textContent
                const selectedCity = this.dataset.city;
                updateStreets(selectedCity);
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

    function updateStreets(selectedCity) {
        document.querySelectorAll('.city__street').forEach(street => {
            if (street.dataset.city === selectedCity) {
                street.classList.add('active')
                document.querySelector('.city__map').style.display ='inline-flex'
            } else {
                street.classList.remove('active')
            }
        });
    }
}

export default selectCustom