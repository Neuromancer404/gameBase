<template>
  <div class="root">
    <div class="Header">
      <carouselContainer class="carouselContainer"></carouselContainer>
      <previewContainer class="previewContainer"></previewContainer>
    </div>
    <newsContainer></newsContainer>
  </div>
</template>

<script>
import carouselContainer from './CarouselContainer'
import newsContainer from './NewsContainer'
import previewContainer from './PreviewContainer'
export default {
  name: 'App',
  components:{
    carouselContainer,
    newsContainer,
    previewContainer
    
  }
}
</script>

<style>
.Header{
  position: relative;
}
.previewContainer{
  position:absolute;
  top: 0%;
}
.carouselContainer{
  position: relative;
  top: 0%;
}
</style>