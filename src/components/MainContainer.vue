<template>
  <carouselContainer></carouselContainer>
  <newsContainer></newsContainer>
</template>

<script>
import carouselContainer from './CarouselContainer'
import newsContainer from './NewsContainer'
export default {
  name: 'App',
  components:{
    carouselContainer,
    newsContainer
  }
}
</script>

<style>
#app{

}
</style>