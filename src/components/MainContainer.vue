<template>
  <div class="root">
    <div class="Header">
      <div class="previewContainer">
        <previewContainer class=""></previewContainer>
      </div>
      <div class="carouselContainer">
        <carouselContainer class=""></carouselContainer>
      </div>
      <div class="list">
        <ul>
          <li><h1>Новости</h1></li>
          <li><h1>События</h1></li>
          <li><h1>Сиськи</h1></li>
          <li><h1>Письки</h1></li>
        </ul>
      </div>
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
  display: table;
  position: relative;
  height: 110%;
}
.list{
  position: absolute;
  display: flex;
  right: 4%;
  height: 100%;
}
ul{
  margin: auto;
}
.previewContainer{
  display: table-cell;
  position:absolute;
  z-index: 1;
  text-align: center;
  width: 20%;
  height: 100%;
}
.carouselContainer{
  display: table-cell;
  position: relative;
}
</style>