<template>
  <div class="root">
    <div class="navMenu">
      <navMenu class="navMenu"></navMenu>
    </div>
    <mainContainer class="mainContainer"></mainContainer>
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
.root{
  position: relative;
}
.navMenu{
  position:absolute;
}
.mainContainer{
  position: absolute;
  background-color: #f9c74f;
  height: auto;
}
</style>
