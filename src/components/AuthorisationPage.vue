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
          </div>
          <p>Пароль:</p>
            <input class="password" name="password" id="password">
        </section>
        <footer class="modal-footer">
            <slot name="footer">
              <button
                type="submit"
                class="btn-green"
                @click="clickEvent">
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
    }
  },
  methods:{
    close() {
      this.$emit('close');
    },
    clickEvent(){
      let login = document.getElementById("login").value;
      let password = document.getElementById("password").value;
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.open('POST', './php/'+this.way+'.php', true);
      xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xmlhttp.send("login=" + encodeURIComponent(login) + "&password=" + encodeURIComponent(password));
      xmlhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                    let obj = JSON.parse(this.responseText);
                    console.log(obj)
                 }
                 else{
                     console.log("connection error");
                 }
      }
      console.log(this.way);
    }
  },
}
</script>

<style>
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