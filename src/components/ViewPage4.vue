<template>
  <div id='ViewPage4' :style="{ zIndex: `${this.zIndex}`}">
    <div class='FusenPosition' @click="$emit('mekuri', 4)">
      <FusenLink title='制作物2' color='yellow'/>
    </div>
    <div class='body'>
      <div class='title'><span class="material-symbols-outlined">work</span>&thinsp;Works2</div>
      <div class='name'>&thinsp;<br>ポートフォリオサイト</div>
      <img :src="require(`@/assets/portfolio.png`)" /><br>
      <i class="devicon-github-original"></i><a href="https://github.com/syukatsu0415/portfolio" target="_blank">GitHub<br></a>
      <div class='text'>
        このWebページです。就活用なので書類風にデザインしました。<br>
        業務の関係上個人で自由に公開できる制作物が無かったので、<br>
        今回の転職活動を機に制作物1と併せて制作しました。<br>
        <br>
        使用ツール<br>
        フロント：Vue.js（VueCLI）<br>
        インフラ：AWS（S3,Route53）<br>
        <br>製作期間：3日
      </div>
    </div>
  </div>
</template>

<script>
import FusenLink from './FusenLink.vue'
export default {
  name: 'ViewPage4',
  props: {
    zIndex: Number,
  },
  components: {
    FusenLink,
  }
}
</script>

<style scoped>
#ViewPage4 {
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
  margin-top:45%;
  margin-left:94%;
  transform: rotate(2deg);
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
.name{
  font-size:2.2vh;
  margin:3% 0 2% 0;
}
img{
  width:65%;
  height:65%;
}
i{
  font-size:2vh;
}
a{
  font-size:2vh;
}
.text{
  margin-top:5%;
  font-size:1.9vh;
}
</style>
