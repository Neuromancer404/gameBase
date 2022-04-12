<template >
    <div class="root">
        <div class="fulling">
            <div class="topGamesClass" :scroll="gameLoad()">
                <top-games></top-games>
            </div>

            <div class="news">

            </div>
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
        return{
            picture: String,
            name: String,
            quantity: String,
            view: String,
            izdatel: String,
            sozdatel: String,
        }
    }, 
    methods:{
       gameLoad(){
            let arr=['picture', 'name', 'quantity', 'view', 'izdatel', 'sozdatel', 'sell'];
            
            for(let i =1; i<=25; i++){
                for(let j=0; j<arr.length; j++){
                let xmlhttp = new XMLHttpRequest();
                xmlhttp.open('POST', './php/gameLoader.php', true);
                xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xmlhttp.send("request=" + encodeURIComponent(arr[j]) + "&count=" + encodeURIComponent(i));
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        if(this.status == 200){
                                    console.log(this.responseText);
                                    jsonRunner(this.responseText)
                            }else{
                                    error('non 200 response for games loader');
                                }
                        }else("connection error");
                }
                }
        }
        },
    },

}





function jsonRunner(json){
    JSON.parse(json, (key, val)=>{
        if(key == "errorType"){
            error(val);
        }
    })
    console.log(json)
}
function error(data){
    alert(data)
}
</script>
<style>
.fulling{
    height: 100vh;
}
</style>