<template>
  <div class="root">
    <div class="Header">
      <div class="carouselContainer">
        <carouselContainer class=""></carouselContainer>
      </div>
      <div class="previewContainer">
        <previewContainer class=""></previewContainer>
      </div>
      <div class="list">
        <ul class="previewList">
          <li><h1>Новости</h1></li>
          <li><h1>События</h1></li>
          <li><h1>Сиськи</h1></li>
          <li><h1>Письки</h1></li>
        </ul>
      </div>
    </div>
    <gameContainer></gameContainer>
  </div>
</template>

<script>
import carouselContainer from './CarouselContainer'
import GameContainer from './GameContainer'
import previewContainer from './PreviewContainer'

export default {
  name: 'App',
  components:{
    carouselContainer,
    GameContainer,
    previewContainer
    
  }
}
</script>

<style>

.root{
  margin: 0%;
}
.Header{
  display: table;
  position: relative;
  width: 100vw;
  top: 0%
}
.list{
  position: absolute;
  display: flex;
  right: 8%;
  height: 100%;
}
.previewList{
  margin: auto;
  text-shadow: 1px 1px 1px #fff;
}
.previewContainer{
  display: table-cell;
  position:absolute;
  text-align: center;
  width:20%;
  height: 100%;
  left: 2vw;
}
.carouselContainer{
  display: table-cell;
  position: relative;
}
</style>