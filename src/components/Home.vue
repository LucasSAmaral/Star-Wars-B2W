<template>
    <div class="container">
        <ALongTimeAgo></ALongTimeAgo>
    </div>
</template>


<script>
    import ALongTimeAgo from './ALongTimeAgo';
    export default {
        name: 'Home',
        data() {
            return {

            }
        },
        components: {ALongTimeAgo}


    }
</script>

<style lang="scss">
    .container {
        width: 100%;
        height: auto;
    }
</style>
