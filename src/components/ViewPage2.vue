<template>
  <div id='ViewPage2' :style="{ zIndex: `${this.zIndex}`}">
    <div class='FusenPosition' @click="$emit('mekuri', 2)">
      <FusenLink title='スキル' color='lightgreen'/>
    </div>
    <div class='body'>
      <div class='title'><span class="material-symbols-outlined">construction</span>&thinsp;Skill</div>
      <div class='head'>★★★：かなり使える</div>
      <div class='iconFrame' :style="{ backgroundColor: `rgba(255,215,0,0.25)`}">
        <i class="devicon-java-plain-wordmark "> </i>
        <i class="devicon-javascript-plain"  :style="{ margin: `0 5%`}" ></i>
        <i class="devicon-vuejs-plain-wordmark"></i>
      </div>
      <div class='head'>★★☆：普通に使える</div>
      <div class='iconFrame' :style="{ backgroundColor: `rgba(192,192,192,0.25)`}">
        <i class="devicon-html5-plain-wordmark"></i>
        <i class="devicon-css3-plain-wordmark"></i>
        <br>
        <i class="devicon-nodejs-plain-wordmark"></i>
        <i class="devicon-git-plain-wordmark" :style="{ margin: `0 5%`}"></i>
        <i class="devicon-oracle-original"></i>
      </div>
      <div class='head'>★☆☆：そこそこ使える</div>
      <div class='iconFrame' :style="{ backgroundColor: `rgba(205, 127, 50,0.25)`}">
        <i class="devicon-amazonwebservices-plain-wordmark"></i>
        <i class="devicon-linux-plain" :style="{ margin: `0 5%`}"></i>
        <i class="devicon-socketio-original-wordmark"></i>
      </div>
    </div>
  </div>
</template>

<script>
import FusenLink from './FusenLink.vue'
export default {
  name: 'ViewPage2',
  props: {
    zIndex: Number,
  },
  components: {
    FusenLink,
  }
}
</script>

<style scoped>
#ViewPage2 {
  position: absolute;
  background-color:white;
  width: 68vh;
  height: 90vh;
  transform: rotate(0.7deg);
  border: solid 0.1px lightgray;
}
.FusenPosition{
  position: absolute;
  width:22%;
  height:4.5%;
  margin-top:24%;
  margin-left:94%;
  transform: rotate(2deg);
}
span{
  font-size:3vh;
}
.body{
  text-align:center;
}
.title{
  font-size:3vh;
  margin-top:2%;
}
.head{
  margin:5% 0% 1% 0%;
  font-size:3vh;
}
.iconFrame{
  font-size:9.6vh;
  line-height:40%;
  border:solid 1px black;
  width:58%;
  padding:2%;
  margin:auto;
}
</style>