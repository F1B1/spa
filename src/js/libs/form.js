function form (){
    const inputsFocus = document.querySelectorAll('.combine__input-block input');

    inputsFocus.forEach(input => {
        input.addEventListener('focus', () => {
            const label = input.nextElementSibling;
            label.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                const label = input.nextElementSibling;
                label.classList.remove('focused');
            }
        });
    });


    const toggleButtons = document.querySelectorAll('.footer__text');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
        button.classList.toggle('active');
        const menu = button.nextElementSibling;
        if (menu) {
            menu.classList.toggle('active');
        }
        });
    });


    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const menuItems = document.querySelectorAll('.combine__menu .combine__item');
    const timeItems = document.querySelectorAll('.combine__time-menu .combine__time-item');
    const submitButton = form.querySelector('.combine__button');
    const consentCheckbox = document.getElementById('combine');
    
    function validateForm() {
        let isValid = true;
    
        const nameRegex = /^[А-Яа-яЁё\s]+$/;
        if (!nameRegex.test(nameInput.value)) {
            document.getElementById('nameError').textContent = 'Введите имя корректно';
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }
    
        const phoneRegex = /^\d{10,15}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            document.getElementById('phoneError').textContent = 'Введите телефон корректно';
            isValid = false;
        } else {
            document.getElementById('phoneError').textContent = '';
        }
    
        let isItemSelected = Array.from(menuItems).some(item => item.classList.contains('active'));
        menuItems.forEach(item => item.classList.toggle('error', !isItemSelected));
        isValid = isValid && isItemSelected;
    
        let isTimeSelected = Array.from(timeItems).some(item => item.classList.contains('active'));
        timeItems.forEach(item => item.classList.toggle('error', !isTimeSelected));
        isValid = isValid && isTimeSelected;
    
        if (!consentCheckbox.checked) {
            isValid = false;
        }
    
        submitButton.disabled = !isValid;
    }
    
    function handleMenuClick(event) {
        menuItems.forEach(item => item.classList.remove('active'));
        event.currentTarget.classList.add('active');
        validateForm();
    }
    
    function handleTimeClick(event) {
        timeItems.forEach(item => item.classList.remove('active'));
        event.currentTarget.classList.add('active');
        validateForm();
    }
    
    menuItems.forEach(item => {
        item.addEventListener('click', handleMenuClick);
        item.addEventListener('click', () => item.classList.remove('error')); 
    });
    
    timeItems.forEach(item => {
        item.addEventListener('click', handleTimeClick);
        item.addEventListener('click', () => item.classList.remove('error')); 
    });
    
    form.addEventListener('submit', function(event) {
        validateForm();
        if (submitButton.disabled) {
            event.preventDefault();
        }
    });
    
    nameInput.addEventListener('input', validateForm);
    phoneInput.addEventListener('input', validateForm);
    consentCheckbox.addEventListener('change', validateForm);
    
    
}

export default form