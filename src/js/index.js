import headerScroll from "./libs/scroll";
import selectCustom from "./libs/select";
import { expSwiper } from "./libs/swiper";
import form from "./libs/form";
import loadMapOnScroll from "./libs/map";

document.addEventListener('DOMContentLoaded',()=>{

    loadMapOnScroll()
    headerScroll()
    selectCustom()
    expSwiper()
    form()

})