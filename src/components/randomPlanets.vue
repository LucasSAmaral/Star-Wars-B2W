<template>
    <div>
        <h1 class="planets__name">
            {{planets.name}}
        </h1>

        <p><span>Population:</span> {{planets.population}}</p>

        <p><span>Climate:</span> {{planets.climate}}</p>

        <p><span>Terrain:</span> {{planets.terrain}}</p>

        <p><span>Featured in</span> {{planets.films.length}} <span>films</span></p>
    </div>
</template>

<script>
    export default {
        name: 'randomPlanets',
        props: ['planets']
    }
</script>

<style lang="scss">

</style>
