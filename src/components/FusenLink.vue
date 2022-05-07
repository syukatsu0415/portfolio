<template>
  <div id='FusenLink' :style="{ backgroundColor: `${this.color}`}">{{title}}</div>
</template>

<script>
export default {
  name: 'FusenLink',
  props: {
    title: String,
    color: String
  },
}
</script>

<style scoped>
@font-face {
  font-family: "makapop";
  src: url("../assets/851makapop.woff")  format('woff');
}
#FusenLink {
  font-family: "makapop";
  width: 100%;
  height: 100%;
  box-shadow: .25rem 0 .25rem hsla(0, 0%, 0%, .2);
  text-align: center;
  padding-top:5%;
  padding-left:20%;
  font-size:3.2vh;
  white-space: nowrap;
  cursor: pointer;
}
</style>