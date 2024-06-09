function loadMapOnScroll() {
    var mapContainers = document.querySelectorAll('.map__container');

    function loadMap(mapContainer) {
        var map = mapContainer.querySelector('.place__map');
        var iframe = document.createElement('iframe');
        iframe.src = map.dataset.src;
        iframe.width = '100%';
        iframe.height = '100%';
        iframe.frameborder = '0';
        iframe.allowfullscreen = '';
        map.appendChild(iframe);
    }

    function handleScroll() {
        mapContainers.forEach(function(mapContainer) {
            var rect = mapContainer.getBoundingClientRect();
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top < windowHeight && !mapContainer.dataset.loaded) {
                loadMap(mapContainer);
                mapContainer.dataset.loaded = true;
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
}

export default loadMapOnScroll