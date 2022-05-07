<template>
  <div>
    <div id="app">
      <div id="dispFrame">
        <ViewPage0 @mekuri="changeZ" :zIndex="zIndexOfPage[0]" />
        <ViewPage1 @mekuri="changeZ" :zIndex="zIndexOfPage[1]" />
        <ViewPage2 @mekuri="changeZ" :zIndex="zIndexOfPage[2]" />
        <ViewPage3 @mekuri="changeZ" :zIndex="zIndexOfPage[3]" />
        <ViewPage4 @mekuri="changeZ" :zIndex="zIndexOfPage[4]" />
        <ViewPage5 @mekuri="changeZ" :zIndex="zIndexOfPage[5]" />
      </div>
    </div>
    <div id="phone">
      <PhonePage/>    
    </div>
  </div>
</template>

<script>
import ViewPage0 from './components/ViewPage0.vue'
import ViewPage1 from './components/ViewPage1.vue'
import ViewPage2 from './components/ViewPage2.vue'
import ViewPage3 from './components/ViewPage3.vue'
import ViewPage4 from './components/ViewPage4.vue'
import ViewPage5 from './components/ViewPage5.vue'
import PhonePage from './components/PhonePage.vue'
export default {
  name: 'App',
  components: {
    ViewPage0,
    ViewPage1,
    ViewPage2,
    ViewPage3,
    ViewPage4,
    ViewPage5,
    PhonePage
  },
  data() {
    return {
      zIndexOfPage: [5,4,3,2,1]
    }
  },
  methods: {
    changeZ: function(e){
      this.$set(this.zIndexOfPage,[0],6)
      this.$set(this.zIndexOfPage,[1],5)
      this.$set(this.zIndexOfPage,[2],4)
      this.$set(this.zIndexOfPage,[3],3)
      this.$set(this.zIndexOfPage,[4],2)
      this.$set(this.zIndexOfPage,[5],1)
      this.$set(this.zIndexOfPage,[e],999)
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');
*{
  font-family: 'New Tegomin', serif;
}
@media screen and (max-width: 960px){
  #app {
    display:none;
  }
  #dispFrame {
    display:none;
  }
}
@media screen and (min-width: 961px){
  #app {
    position: fixed;
    top: -1%;
    left: 0;
    width: 100vw;
    height: 101vh;
    background-image: url(./assets/wood.jpg);
    background-size: 100% 100%;
    z-index:0;
  }
  #dispFrame{
    display:block;
    width: 70%;
    position: relative;
    margin:2.5% auto;
    display: flex;
    justify-content: center;
  }
  #phone{
    display:none;
  }
}
</style>