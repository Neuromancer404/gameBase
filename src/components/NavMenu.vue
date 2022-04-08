<template>
  <div class="rootNav">
    <div class="dockMenu">
      <DockMenu
          :items="items"
          :on-selected="onSelected"
          title="dgggvxcv"
          :theme="{
        primary: '#277da1',
        secondary: '#e5e5e5',
        tertiary: '#008ecc',
        textColor: '#000',
        textHoverColor: '#fff',
      }"
      ></DockMenu>
    </div>
  <div class="authorisation">
    <authorisation-page @close="closeModal" v-show="isVisible" :title="title"></authorisation-page>
  </div>
</div>
  
</template>

<script>
import { DockMenu } from "vue-dock-menu";
import "vue-dock-menu/dist/vue-dock-menu.css";
import AuthorisationPage from './AuthorisationPage.vue';

export default {
  name: "App",
  components: {
    DockMenu,
    AuthorisationPage,
  },
  data() {
    return {
      isVisible:false,
      title: String,
      count: 0,
      items: [
        {
          name: "Авторизация",
          menu: [{name: "Вход",  }, {name:"Регистрация"}]
        },
      ],
    };
  },
  methods:{
      onSelected(e){
        switch(e.name){
          case("Регистрация"):
          console.log("Регистрация");
          this.isVisible=true;
          this.title = "Регистрация"
          break;

          case("Вход"):
          console.log("Вход");
          this.isVisible=true;
          this.title = "Вход"
          break;
        }
      },
      closeModal(){
        this.isVisible = false;
      }
    }
};
</script>
<style>
.rootNav{
  position: fixed;
  height: 100%;
}
.authorisation{
  position: fixed;
}
.dockMenu{
  position: fixed;
  
}
</style>