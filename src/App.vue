<template>
  <div id="app">
     <img class="app__logo big" src="../src/assets/Star-Wars.png" alt="Star Wars">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
 body {
   background-image: url('./assets/Stars.gif');
   margin: 0;
   padding: 0;
 }

 .app {
   &__logo {
     display: block;
     margin: 0 auto;
     transform: scale(0.4);
     transition: 2s;

     &.big {
       transform: scale(1);
     }
   }
 }
</style>
