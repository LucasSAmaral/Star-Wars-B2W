<template>
<div class="about-star-wars__container">

    <div class="about-star-wars__content">
        <h1 class="about-star-wars__title">
            About Star Wars
        </h1>

        <p>Something here...</p>
    </div>

    <div class="about-star-wars__buttons">
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
    .about-star-wars {
        &__container {
            width: 100%;
            height: 100vh;
            font-family: 'News Cycle', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        &__content {
            width: 100%;
            max-width: 500px;
            height: auto;
            margin: 0 auto;
            background-color: #000;
            border: 4px solid #e1b100;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 20px;
            margin-bottom: 30px;

            p {
                color: #12c9e8;
            }
        }
        &__title {
            color: #e1b100;
            text-align: center;
            margin: 0;
        }
        &__buttons {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
</style>
