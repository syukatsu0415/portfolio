<template>
  <div id='ViewPage0' :style="{ zIndex: `${this.zIndex}`}">
    <div class='FusenPosition' @click="$emit('mekuri', 0)">
      <FusenLink title='表紙' color='pink'/>
    </div>
    <div class='guide'>クリックして移動→</div>
    <div class='body'>
      <h1>Portfolio Website</h1>
      <h2>by Horiuchi Tomoki</h2>
    </div>
  </div>
</template>

<script>
import FusenLink from './FusenLink.vue'
export default {
  name: 'ViewPage0',
  props: {
    zIndex: Number,
  },
  components: {
    FusenLink,
  }
}
</script>

<style scoped>
@font-face {
  font-family: "makapop";
  src: url("../assets/851makapop.woff")  format('woff');
}
#ViewPage0 {
  position: absolute;
  background-color:white;
  width: 68vh;
  height: 90vh;
  transform: rotate(-3.5deg);
  border: solid 0.1px lightgray;
}
.FusenPosition{
  position: absolute;
  width:22%;
  height:4.5%;
  top:4%;
  left:94%;
  transform: rotate(-2deg);
}
.guide{
  font-family: "makapop";
  position: absolute;
  font-size:2.6vh;
  top:14.5%;
  right:2%;
  color:red;
  transform: rotate(-3deg);
}
.body{
  text-align:center;
  margin-top:48%;
  font-size:2vh;
}
h1{
  font-size:5.5vh;
}
h2{
  font-size:3.2vh;
}
</style>