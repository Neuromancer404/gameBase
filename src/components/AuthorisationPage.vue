<template v-show="isVisibleModal">
<transition name="modal-fade">
    <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h1 class="enter">{{title}}</h1>

          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            <p class="select">Закрыть</p>
          </button>
        </slot>
      </header>
        <section class="modal-body">
          <div class="login">
            <p>Логин:</p>
          </div>
          <div class="password">
            <input class="login" name="login" id="login">
            <p class="errorOut" v-if="loginVisible">Введите логин</p>
          </div>
          <div class="email" v-if="way == 'registration'">
            <p>E-mail:</p>
            <input class="email" name="email" id="email">
            <p class="errorOut" v-if="emailVisible">Введите почту</p>
          </div>
          <div class="nickname" v-if="way == 'registration'">
            <p>Никнейм:</p>
            <input class="nickname" name="nickname" id="nickname">
            <p class="errorOut" v-if="nickVisible">Введите никнейм</p>
          </div>
          <p>Пароль:</p>
            <input class="password" name="password" id="password">
            <p class="errorOut" v-if="passwordVisible">Введите пароль</p>
        </section>
        <footer class="modal-footer">
          <p v-show="helloVisible">Авторизация прошла успешно</p>
            <slot name="footer">
              <button
                type="submit"
                class="btn-green"
                @click="clickEvent"
                >
                <h2>Вход</h2>
            </button>
          </slot>
        </footer>
    </div>
  </div>
</transition>
</template>

<script>
export default{
  props:{
    title: String,
    way: String
  },
  data(){
    return{
      loginVisible: false,
      passwordVisible: false,
      nickVisible: false,
      emailVisible: false,
      helloVisible: false
    }
  },
  methods:{
    close() {
      this.$emit('close');
      this.loginVisible = false
      this.passwordVisible = false
      this.nickVisible = false
      this.emailVisible = false
    },
    clickEvent(){
      let login, password, email, nickname 
      if(this.way == "registration") {
        email = document.getElementById('email').value;
        nickname = document.getElementById('nickname').value;

        if(document.getElementById("nickname").value == ''){
          this.nickVisible = true;
        }else{this.nickVisible = false}
        if(document.getElementById("email").value == ''){
          this.emailVisible = true;
        }else{this.emailVisible = false}
      }

      let xmlhttp = new XMLHttpRequest();
      if(document.getElementById("login").value == ''){
        this.loginVisible = true;
      }
      else{
        login = document.getElementById('login').value;
        this.loginVisible = false;
      }
      if(document.getElementById("password").value == ''){
        this.passwordVisible = true;
      }
      else{
        password = document.getElementById('password').value;
        this.passwordVisible = false;
        }



      if(!this.loginVisible && !this.passwordVisible && !this.nickVisible && !this.emailVisible){
      password = document.getElementById("password").value

      xmlhttp.open('POST', './php/'+this.way+'.php', true);
      xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      switch(this.way){
        case 'registration':
      xmlhttp.send("login=" + encodeURIComponent(login) + "&password=" + encodeURIComponent(password) + "&email=" + encodeURIComponent(email) + "&nick=" + encodeURIComponent(nickname));
      console.log(this.way);
      break;
        case 'authorisation':
      xmlhttp.send("login=" + encodeURIComponent(login) + "&password=" + encodeURIComponent(password));
      console.log(this.way);
          break;
      }
      xmlhttp.onreadystatechange = function() {
         if (this.readyState == 4) {
           if(this.status == 200){
                    console.log(this.responseText);
                    if(jsonRunner(this.responseText)){this.helloVisible = true}
            }else{
                    error('connection error');
                }
           }
      }
      console.log(this.way);
      }
    },
  },
}
function error(data){
  alert(data);
}

function jsonRunner(json){
    JSON.parse(json, (key, val)=>{
      if(key == 'errorType'){
        error(val)
      }
      if(key == 'using'){
        error('Такой логин уже занят :(');
      }
      if(key == 'authorisation' && val == true){
        JSON.parse(json, (key, val)=>{
            if(key == 'login'){
              document.cookie = 'userLogin'+'='+val;
              }
            if(key == 'nickname'){
              document.cookie = 'userNick'+'='+val;
            }
            if(key == 'role'){
            document.cookie = 'userRole'+'='+val;
            }
        });
        console.log(document.cookie);
        return true;
      }
    })
  }
</script>

<style>
.errorOut{
  color: red;
}
.modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
      }
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display:flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: table;
    display: table;;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .btn-close {
    display: table-cell;
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    margin: 5;
    text-align: center;
    width: 200px;
  }
  .select:hover{
    text-decoration: underline;

  }
input{
  margin-left: 10%;
  margin-right: 10%;
  text-align: center
}
.enter{
  display: table-cell;
}

</style>