<template>
<div class="about__container">
    <div class="about__content">
        <h1 class="about__title">
            About Star Wars
        </h1>

        <p>Something here...</p>
    </div>

    <div class="about__buttons">
        <Buttons class="button" text="Play Game" path="planets"></Buttons>
        <Buttons class="button" text="Home" path="/"></Buttons>
        <Buttons class="button" text="About Me" path="aboutme"></Buttons>
    </div>

</div>  
</template>

<script>
    import Buttons from '@/components/Buttons'
    export default {
        name: 'AboutStarWars',
        components: {Buttons}
    }
</script>

<style lang="scss">
    @import '../scss/About';
</style>
