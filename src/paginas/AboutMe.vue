<template>
<div class="about__container">
    <div class="about__content">
        <h1 class="about__title">
            About Me
        </h1>

        <p>Something here...</p>
    </div>
    <div class="about__buttons">
        <Buttons class="button" text="Play Game" path="planets"></Buttons>
        <Buttons class="button" text="Home" path="/"></Buttons>
        <Buttons class="button" text="About Star Wars" path="aboutstarwars"></Buttons>
    </div>
</div>
</template>

<script>
    import Buttons from '@/components/Buttons'
    export default {
        name: 'AboutMe',
        components: {Buttons}
    }
</script>

<style lang="scss">
    @import '../scss/About';
</style>
