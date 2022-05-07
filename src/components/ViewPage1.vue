<template>
  <div id='ViewPage1' :style="{ zIndex: `${this.zIndex}`}">
    <div class='FusenPosition' @click="$emit('mekuri', 1)">
      <FusenLink title='自己紹介' color='lightblue'/>
    </div>
    <div class='title'><span class="material-symbols-outlined">person</span>&thinsp;About</div>
    <img :src="require(`@/assets/me.png`)" />
    <div class='profile'>
      名前：ホリウチ  トモキ<br>
      生年月日：1993/04/15<br>
      出身：埼玉県<br>
      趣味：ギター、DTM、お酒、盆栽<br>
      資格：Java Silver SE 8<br>
      &emsp;&emsp;&emsp;AWS Cloud Practitioner
    </div>
    <div class="v_line_left">
      <div class='text'>
        <div class='day'>◆&ensp;2018/04</div><br>
          &emsp;<b>大学卒業後、SES企業に入社</b><br>
          &emsp;主にクレジットカードシステムの開発に携わる
      </div>
      <div class='text'>
        <div class='day'>◆&ensp;2020/04</div><br>
          &emsp;<b>転職し、自社開発企業に入社</b><br>
          &emsp;社内SEとして自社パッケージソフトの開発を行う
      </div>
      <div class='text'>
        <div class='day'>◆&ensp;2022/04</div><br>
        &emsp;<b>キャリアアップの為、転職活動を開始</b><br>
        &emsp;現在に至る
      </div>
    </div>
  </div>
</template>

<script>
import FusenLink from './FusenLink.vue'
export default {
  name: 'ViewPage1',
  props: {
    zIndex: Number,
  },
  components: {
    FusenLink,
  }
}
</script>

<style scoped>
#ViewPage1 {
  position: absolute;
  background-color:white;
  width: 68vh;
  height: 90vh;
  transform: rotate(-1deg);
  border: solid 0.11px lightgray;
}
.FusenPosition{
  position: absolute;
  width:22%;
  height:4.5%;
  margin-top:15%;
  margin-left:95%;
}
span{
  font-size:3vh;
}
.title{
  text-align:center;
  font-size:3vh;
  margin-top:2%;
}
img{
  position:absolute;
  width:23%;
  height:23%;
  margin-top:6%;
  margin-left:12%;
  transform: rotate(-1deg);
}
.profile{
  line-height:3.5vh;
  font-size:2.4vh;
  margin-top:7%;
  margin-left:41%;
}
.v_line_left {
  position:absolute;
  width:80%;
  height:48%;
  left:13%;
  bottom:10%;
  border-left: solid;
}
.text{
  font-size:2.2vh;
  margin:5% 0;
}
.day{
  position:absolute;
  left:-2.2%;
}
</style>
