<template>
    <div class="ALongTimeAgo__container">

        <div class="ALongTimeAgo__background">

            <div class="ALongTimeAgo__text">
                {{text}}
            </div>

        </div>

    </div>
</template>


<script>
    import $ from 'jquery';
    export default {
        name: 'ALongTimeAgo',
        data() {
            return {
                text: 'A long time ago in a galaxy far, far away....',
            }
        },
        mounted() {
            setTimeout(function(){
               $('.ALongTimeAgo__container').fadeOut(200);
            },5000);
            setTimeout(function(){
               $('.app__logo').removeClass('big');
            },8000);
            setTimeout(function(){
               $('.content__menu').removeClass('hide');
               $('.ALongTimeAgo__container').remove();
            },9000);
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=News+Cycle:400,700');
    .ALongTimeAgo {
        &__background {
            background: #000;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
            
        }
        &__text {
            position: fixed;
            width: 100%;
            z-index: 2;
            font-family: 'News Cycle', sans-serif;
            color: #12c9e8;
            font-size: 30px;
            max-width: 365px;
            left: calc(50% - (365px/2));
            top: calc(50% - 50px);
        }
    }

</style>
