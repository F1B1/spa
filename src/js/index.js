import headerScroll from "./libs/scroll";
import selectCustom from "./libs/select";
import { expSwiper } from "./libs/swiper";
import form from "./libs/form";
import loadMapOnScroll from "./libs/map";

document.addEventListener('DOMContentLoaded',()=>{

    var video = document.getElementById('video');
    var placeholder = document.getElementById('placeholder');

    video.addEventListener('canplaythrough', function() {
        placeholder.style.display = 'none';
        video.style.display = 'block';
        video.play();
    }, false);

    video.load();

    loadMapOnScroll()
    headerScroll()
    selectCustom()
    expSwiper()
    form()

})