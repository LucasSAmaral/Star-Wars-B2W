<template>
    <router-link :to=path>{{text}}</router-link>
</template>

<script>
    export default {
        name: 'Buttons',
        props: [
            'text',
            'path'
        ]        
    }
</script>

<style lang="scss">

</style>
