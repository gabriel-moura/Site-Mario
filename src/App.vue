<template>
  <div id="app">
    <header>
   
            <ul id="itens-header" >
              
               <router-link  id='text' to="/">Mario's Company</router-link>
              
              <li> 
               <router-link @click.native="eventMario" to="/mario">
              
                <img  class="sizeshow" src="./assets/mariohead.png">
              </router-link>
              </li>

              <!-- <li>
                <a href="#">
                <img class="sizeshow" src="./assets/luigihead.png">
                </a>
              </li>
             -->

            </ul>
    </header>
<div>
<router-view></router-view>
</div>
  </div>
</template>

<script>
//  import Home  from './components/Home.vue'
//  import Mario from './components/Mario'
export default {
  name: 'App',
   data() {

    return {
        //  evento:''
    }
    
    },
  components: {
    // Home
  },
  
  methods:{
    eventMario: function(event){
      const evento = event.target;
      const header = document.getElementById('itens-header');
      const text = document.getElementById('text');
        evento.style.transform = 'rotate(360deg)';
        header.style.background = 'red';
        text.style.color = 'white';
    }
  }

}
</script>

<style >
*{
  margin:0px;
}
#itens-header{
display:flex;
align-items: center;
list-style:none;
background: rgb(235, 174, 61);
height: 70px;
font-size:30px;
font-family: 'Oswald', sans-serif;
}
.sizeshow{
  height:3em;
  width: 3em;
}
li{
  display: flex;
padding-top: 50px;
margin-left:450px;
}
a{
  color: #920b92;
  text-decoration: none
}
 img{
transition: transform 1.5s;
   
} 
</style>
