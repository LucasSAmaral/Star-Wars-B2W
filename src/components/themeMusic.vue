<template>
     <audio id="themeSong" src="https://www.thesoundarchive.com/starwars/star-wars-theme-song.mp3"></audio>
</template>

<script>
    export default {
        created() {
            this.themeSong = document.getElementById('themeSong');
        },
        mounted() {
             setTimeout(function(){
               this.themeSong.play();
            },5000);
        }   
    }
</script>


<style lang="scss">

</style>
