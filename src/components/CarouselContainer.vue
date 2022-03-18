<template>
<div class="rootCarousel">
  <Carousel :autoplay="3000" :wrap-around="true" class="Carousel">
    <Slide v-for="slide of imagePath" :key="slide">
      <div class="carousel__item"><img id="slide" class="img" :src=slide></div>
    </Slide>
  </Carousel>
</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

export default {
  name: 'App',
  data(){
    return{
      imagePath:[
        'https://sun9-53.userapi.com/impg/zqOxEH6ujRBaXCG8Ijwysj_wuEnIRIBSBZGnkA/xa5yEBMXogc.jpg?size=1920x1080&quality=96&sign=fba8dde2f23495c3e382a5bbb866bc1b&type=album',
        'https://sun9-4.userapi.com/impg/UcLuE4ls7cThsXrycRLiKwTLwBPah8QlhAGPMg/UB8OShWaCIE.jpg?size=1920x1080&quality=96&sign=373b84f9df669ed96f992a4f6ed0ffd6&type=album',
        'https://sun9-3.userapi.com/impg/B_s2FcXsnGUHsANE60iIciJd6YfQnBFUzt5qkg/r83i5tB-lyM.jpg?size=1920x1080&quality=96&sign=3b9a45a60bb58a6ce567dbba5d339927&type=album',
        'https://sun9-31.userapi.com/impg/ec_Avfo4cjZ9v822xxnUnUOADfgl_pcvOEhpVw/UG6z35Dv6Fs.jpg?size=1920x1080&quality=96&sign=001c2ae548706b304e40d06525c46052&type=album',
        'https://sun9-65.userapi.com/impg/DMj1o5ko32SOVpLSkks6171gdPebRUrr3vdB2w/5DMY_iJ4Isk.jpg?size=2560x1412&quality=96&sign=842c3018d3cf95e15acf59df8e2c7b35&type=album',
      ],
    }
  },
  components: {
    Slide,
    Carousel
  }
}
</script>

<style>
.img{
  height: 50vh;
}
.rootCarousel{
  width: 100vw;
}
</style>