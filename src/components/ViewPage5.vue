<template>
  <div id='ViewPage5' :style="{ zIndex: `${this.zIndex}`}">
    <div class='FusenPosition' @click="$emit('mekuri', 5)">
      <FusenLink title='連絡' color='mediumpurple'/>
    </div>
    <div class='body'>
      <div class='title'><span class="material-symbols-outlined">mail</span>&thinsp;Contact</div>
      <div class='text'>
        <h1>Thank you for reading.</h1>
        <p>Mail:<a href="mailto:syukatsu0415@gmail.com">syukatsu0415@gmail.com</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import FusenLink from './FusenLink.vue'
export default {
  name: 'ViewPage5',
  props: {
    zIndex: Number,
  },
  components: {
    FusenLink,
  }
}
</script>

<style scoped>
#ViewPage5 {
  position: absolute;
  background-color:white;
  width: 68vh;
  height: 90vh;
  transform: rotate(2deg);
  border: solid 0.1px lightgray;
}
.FusenPosition{
  position: absolute;
  width:22%;
  height:4.5%;
  margin-top:57%;
  margin-left:94%;
  transform: rotate(-4deg);
}
.body{
  text-align:center;
}
span{
  font-size:3vh;
}
.title{
  font-size:3vh;
  margin-top:2%;
}
.text{
  margin-top:38%;
  line-height:250%;
  font-size:2.2vh;
}
</style>