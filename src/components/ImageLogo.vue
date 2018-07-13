<template>
    <img class="app__logo big" src="../assets/Star-Wars.png" alt="Star Wars">
</template>

<script>
    export default {
        name: 'ImageLogo'
    }
</script>

<style lang="scss">
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
