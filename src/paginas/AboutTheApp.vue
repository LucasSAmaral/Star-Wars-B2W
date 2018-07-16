<template>
<div class="about__container">
    <div class="about__content">
        <h1 class="about__title">
            About The App
        </h1>

        <p><a href="http://somos.b2wdigital.com/">B2W Digital</a> proposed me this challenge to create a game that shows a random planet and its characteristics like: population, climate, terrain and in how many films this planet has been featured in.</p>
        <p>To make this game, I used the following stack:</p>
        <ul>
            <li>Vue.js</li>
            <li>CSS (SCSS)</li>
            <li>And a bit (just a little bit) of jQuery</li>
        </ul>
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
