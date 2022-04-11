<template>
    <div class="root">
        <div class="topGamesClass">
            <top-games></top-games>
        </div>

        <div class="news">

        </div>
    </div>
</template>

<script>
import TopGames from './TopGames.vue'
export default {
    components:{
        TopGames
    },
    data(){
        //topNews=0,
        //news=0
    }, 
    methods:{
       gameLoad(){
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open('POST', './php/gameLoader.php', true);
            //xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            if(this.status == 200){
                        console.log(this.responseText);
                        jsonRunner(this.responseText)
                }else{
                        error('connection error');
                    }
            }
        }
        },
    },
}
function jsonRunner(json){
    console.log(json)
}
function error(data){
    console.log(data)
}
</script>