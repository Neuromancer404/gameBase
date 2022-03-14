<template>
  <navMenu></navMenu>
  <mainContainer></mainContainer>
</template>

<script>
import navMenu from './components/MavMenu'
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
  background-color: #f9c74f;
}
</style>
