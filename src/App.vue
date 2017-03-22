<template>
  <div id="app">
    <transition name="fade">
    <keep-alive><router-view></router-view></keep-alive>
    </transition>
  </div>
</template>

<script>

</script>

<style coped>
  .fade-enter-active,.fade-leave-active{
    transition:.5s all ease;
    opacity:1;
    transform: translate3d(0, -1rem, 0);
  }
 .fade-enter,.fade-leave{
   opacity:0;  
   transform: translate3d(0, 1rem, 0);
 }

</style>
