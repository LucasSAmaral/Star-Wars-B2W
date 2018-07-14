<template>
<div class="planets__container">

    <div class="planets__content">
        <h1 class="planets__name">
            Planet Name
        </h1>

        <p>Population: 2000000</p>

        <p>Climate: arid</p>

        <p>Terrain: desert</p>

        <p>Featured in nfilms</p>
    </div>
    <div class="planets__buttons">
        <button class="button">Next</button>
        <Buttons class="button" text="Home" path="/"></Buttons>
    </div>
    

</div>   
</template>

<script>
    import Buttons from '@/components/Buttons'
    export default {
        name: 'Planets',
        components: {Buttons}
    }
</script>

<style lang="scss">

    .planets {
        &__container {
            width: 300px;
            height: 400px;
            margin: 0 auto;
            color: #e1b100;
            font-family: 'News Cycle', sans-serif;
            padding-top: 80px;
        }

        &__content {
            background-color: #000;
            border: 1px solid #e1b100;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 5px;

            p {
                text-align: center;
            }

        }

        &__name {
            text-align: center;
            border-bottom: 1px solid #e1b100;
            margin: 0;
            padding: 20px 0px;
        }

        &__buttons {
            margin-top: 30px;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }

</style>
