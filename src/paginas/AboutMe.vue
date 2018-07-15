<template>
<div class="about__container">
    <div class="about__content">
        <h1 class="about__title">
            About Me
        </h1>
        <p>Hello. My name is Lucas Santos do Amaral. I'm 26 years old.</p>
        <p>I've been a Star Wars fan since I was 8 years old. I grew up watching the movies over and over again and also playing some Star Wars games. Actually, I do all of this until today.</p>
        <p>Now, talking about my professional life. I've been working as a Front-End Developer since the beginning of 2015. During these 3 years of experience, I've been working on the TIM Brasil's website. Helping with the website's maintenance and creating new landing pages when it's needed.</p>
        <p>Now I'm looking for an opportunity to grow up professionaly. An opportunity that will make me think outside the box and will get me go out my "comfort zone".</p>
        <p>Check out my <a target="_blank" href="https://github.com/LucasSAmaral">GitHub</a> and <a target="_blank" href="https://www.linkedin.com/in/lucas-amaral-193a459b/">LinkedIn</a> profiles and get in touch with me. I'm having a good feeling about this.</p>
        <p>May the force be with you, always.</p>
    </div>
    <div class="about__buttons">
        <Buttons class="button" text="Play Game" path="planets"></Buttons>
        <Buttons class="button" text="Home" path="/"></Buttons>
        <Buttons id="abouttheapp" class="button" text="About The App" path="abouttheapp"></Buttons>
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
