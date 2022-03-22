<template v-show="isVisibleModal">
<transition name="modal-fade">
    <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Вход

          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            <p class="select">Закрыть</p>
          </button>
        </slot>
      </header>

      <form action="./php/authorisation.php">
        <section class="modal-body">
          <p>Логин:</p>
            <input class="login">
          <p>Пароль:</p>
            <input class="password">
        </section>
        <footer class="modal-footer">
            <slot name="footer">
              <button
                type="submit"
                class="btn-green"
              >
                <h2>Вход</h2>
            </button>
          </slot>
        </footer>
      </form>
    </div>
  </div>
</transition>
</template>

<script>
export default{
  data(){
    return{
      
    }
  },
  methods:{
    close() {
      this.$emit('close');
    }
  }
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
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
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
  }
  .select:hover{
    text-decoration: underline;

  }
</style>