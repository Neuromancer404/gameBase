<template>
  <div class="rootMain">
    <div class="navMenu">
      <navMenu class=""></navMenu>
    </div>
    <div class="container">
      <mainContainer class="mainContainer"></mainContainer>
    </div>
  </div>
</template>

<script>
import navMenu from './components/NavMenu'
import mainContainer from './components/MainContainer'
export default {
  name: 'App',
  components: {
    navMenu,
    mainContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  top:0;
  position:relative;
  margin: 0%;
}
.rootMain{
  position: absolute;
  width: 100vw;
  right: 0px;
  left: 0px;
}
.navMenu{
  position:fixed;
  z-index: 1;
}
.mainContainer{
  position: absolute;
  background-color: #f9c74f;
  height: auto;
}
.js-focus-visible{
  background-color: #fff6e1;
}
</style>
