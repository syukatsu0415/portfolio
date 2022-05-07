<template>
  <div id='PhonePage'>
    <h1>Portfolio Website</h1>
    <h2>by Horiuchi Tomoki</h2>
    <br>
    <hr>
    <div class='title'><span class="material-symbols-outlined">person</span>&thinsp;About</div>
    <img :src="require(`@/assets/me.png`)" />
    <div>
      名前：ホリウチ  トモキ<br>
      生年月日：1993/04/15<br>
      出身：埼玉県<br>
      趣味：ギター、DTM、お酒、盆栽<br>
      資格：Java Silver SE 8, AWS Cloud Practitioner
    </div>
    <br>
    <hr>
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
    <br>
    <hr>
    <div class='title'><span class="material-symbols-outlined">work</span>&thinsp;Works</div>
    <div class='head'>レトロ風オープンチャットアプリ<br>「ドットチャット」</div>
    <a href="http://chat.syukatsu0415.com:3000/" target="_blank" class="image_link"><img :src="require(`@/assets/dotchat.png`)" /></a>
    <i class="devicon-github-original"></i><a href="https://github.com/syukatsu0415/dotchat" target="_blank">GitHub<br></a>
    <div class='head'>&thinsp;<br>ポートフォリオサイト</div>
    <a class="image_link"><img :src="require(`@/assets/portfolio.png`)" /></a>
    <i class="devicon-github-original"></i><a href="https://github.com/syukatsu0415/portfolio" target="_blank">GitHub<br></a>
    <br>
    <hr>
    <div class='title'><span class="material-symbols-outlined">mail</span>&thinsp;Contact</div>
    <p>Mail:<a href="mailto:syukatsu0415@gmail.com">syukatsu0415@gmail.com</a></p>
    <h3>Thank you for reading.</h3>
    <br>
    <br>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "makapop";
  src: url("../assets/851makapop.woff")  format('woff');
}
#PhonePage {
  position: absolute;
  background-color:white;
  width: 95vw;
  height: 98vh;
  text-align:center;
  font-size:4vw;
}
.title{
  font-size:5vw;
  margin:5% auto;
}
.head{
  margin:5% 0% 1% 0%;
  font-size:5vw;
}
.iconFrame{
  font-size:12vw;
  border:solid 1px black;
  width:60%;
  margin:auto;
}
.image_link{
 display:block; 
}
.image_link img{
  width:70%;
  height:70%;
  border:solid 2px;
}
</style>
