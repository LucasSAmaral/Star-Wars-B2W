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
    min-height: 100%;
  }

  html {
    height: 100%;
  }

 .app {
   &__logo {
     display: block;
     margin: 0 auto;
     transform: scale(0.4);
     transition: 2s;

    @media screen and (min-width: 320px) and (max-width: 1023px){
      width: 100%;
     height: auto;

    }

     &.big {
       transform: scale(1);
     }
   }
 }
</style>
