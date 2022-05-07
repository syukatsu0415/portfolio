<template>
  <div id='ViewPage3' :style="{ zIndex: `${this.zIndex}`}">
    <div class='FusenPosition' @click="$emit('mekuri', 3)">
      <FusenLink title='制作物1' color='yellow'/>
    </div>
    <div class='body'>
      <div class='title'><span class="material-symbols-outlined">work</span>&thinsp;Works1</div>
      <div class='name'>レトロ風オープンチャットアプリ<br>「ドットチャット」</div>
      <a href="http://chat.syukatsu0415.com:3000/" target="_blank" class="image_link"><img :src="require(`@/assets/dotchat.png`)" /></a>
      <i class="devicon-github-original"></i><a href="https://github.com/syukatsu0415/dotchat" target="_blank">GitHub<br></a>
      <div class='text'>
        WebSocketの技術を用いたリアルタイムチャットアプリです。<br>
        とにかくカジュアルに使えるアプリを目指し、UIのシンプルさや<br>
        見た目のポップさにこだわって制作しました。<br>
        <br>
        使用ツール<br>
        フロント：Vue.js（VueCLI,Vuex,VueRouter）<br>
        バック：Node.js（axios,express,Socket.io）<br>
        インフラ：AWS（EC2,Route53）<br>
        <br>製作期間：3週間
      </div>
    </div>
  </div>
</template>

<script>
import FusenLink from './FusenLink.vue'
export default {
  name: 'ViewPage3',
  props: {
    zIndex: Number,
  },
  components: {
    FusenLink,
  }
}
</script>

<style scoped>
#ViewPage3 {
  position: absolute;
  background-color:white;
  width: 68vh;
  height: 90vh;
  border: solid 0.1px lightgray;
}
.FusenPosition{
  position: absolute;
  width:22%;
  height:4.5%;
  margin-top:37%;
  margin-left:95%;
  transform: rotate(-2.5deg);
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
.image_link{
 display:block; 
 position:relative;
 text-decoration:none;
}
.image_link img{
  width:65%;
  height:65%;
  transition:0.3s;
  border:solid 2px;
}
.image_link:before{
  content:"Click to Go";
  display:block;
  color:#fff;
  line-height:32px;
  width:180px;
  text-align:center;
  position:absolute;
  top:50%;
  left:50%;
  margin-top:-1em;
  margin-left:-90px;
  opacity:0;
  z-index:1;
  transition:0.3s;
  font-size:3vh;
  font-weight:bold;
}
.image_link:hover img{
  filter:blur(3px);
}
.image_link:hover:before{
  opacity:1;
  margin-top:-0.5em;
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