<template>
  <div class="rootNav">
    <div class="dockMenu">
      <DockMenu
          :items="items2"
          :on-selected="onSelected"
          :theme="{
        primary: '#277da1',
        secondary: '#e5e5e5',
        tertiary: '#008ecc',
        textColor: '#000',
        textHoverColor: '#fff',
      }"
      ></DockMenu>
    </div>
    <div class="dockMenu" v-show="visible">
      <DockMenu
          :items="items"
          :on-selected="onSelected"
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
    <authorisation-page 
    @close="closeModal" 
    v-show="isVisible" 
    :title="title"
    :way="way"
    ></authorisation-page>
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
      visible: true,
      name1: "AAAAAAAAAAAAAAAAAA",
      isVisible:false,
      title: String,
      way: String,
      count: 0,
      items: [
        {
          name: "Авторизация",
          menu: [{name: 'Вход',  }, {name: 'Регистрация'}]
        },
      ],
      items2: [
        {
          name: "Аккаунт",
          menu: [{name: 'Корзина',  }, {name: 'Выход'}]
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
          this.way = "registration"
          break;

          case("Вход"):
          console.log("Вход");
          this.isVisible=true;
          this.title = "Вход"
          this.way = "authorisation"
          break;
        }
      },
      closeModal(){
        this.isVisible = false;
        this.readCookie();
      },
      readCookie(){
        let login = getCookie('userLogin');
        let nickname = getCookie('userNick');
        let role = getCookie('userRole');
        if(nickname!= undefined){
        this.visible = false;
        }
      
        console.log(login, nickname, role);
      }
    }
};
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
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