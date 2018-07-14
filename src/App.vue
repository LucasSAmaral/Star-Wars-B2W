<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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

  #app {
    padding: 10px;

    @media (min-width: 767px) {
      padding: 0;
    }
  }

</style>
