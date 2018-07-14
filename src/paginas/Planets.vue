<template>
<div class="planets__container">

    <div class="planets__content">
        <h1 class="planets__name">
            {{planets.name}}
        </h1>

        <p>Population: {{planets.population}}</p>

        <p>Climate: {{planets.climate}}</p>

        <p>Terrain: {{planets.terrain}}</p>

        <p>Featured in {{planets.films.length}} films</p>
    </div>
    <div class="planets__buttons">
        <button @click="randomPlanet()" class="button">Next</button>
        <Buttons class="button" text="Home" path="/"></Buttons>
        <Buttons class="button" text="About Me" path="aboutme"></Buttons>
    </div>
    

</div>   
</template>

<script>
    import Buttons from '@/components/Buttons'
    export default {
        name: 'Planets',
        components: {Buttons},
        data() {
            return {
                planets: ''
            }
        },
        methods: {
            randomPlanet: function() {
                let randomNumber = Math.floor(Math.random() * (61 - 1 + 1)) + 1;

                this.$http.get('https://swapi.co/api/planets/' + randomNumber)
                .then(response=>{
                    this.planets = response.data
                });
            }
        },
        created() {
            this.randomPlanet();
        }
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
            padding: 10px;

            p {
                text-align: center;
                letter-spacing: 3px;
            }

        }

        &__name {
            text-align: center;
            border-bottom: 1px solid #e1b100;
            margin: 0;
            padding: 20px 0px;
            letter-spacing: 3px;
        }

        &__buttons {
            margin-top: 30px;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }

</style>
