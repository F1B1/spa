function toggle(){
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
}

export default toggle()