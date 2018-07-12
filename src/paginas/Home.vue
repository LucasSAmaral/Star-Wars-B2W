<template>
    <div class="container">
        <themeMusic></themeMusic>
        <ALongTimeAgo></ALongTimeAgo>
    </div>
</template>


<script>
    import ALongTimeAgo from '@/components/ALongTimeAgo';
    import themeMusic from '@/components/themeMusic';
    export default {
        name: 'Home',
        components: {ALongTimeAgo,themeMusic}


    }
</script>

<style lang="scss">
    .container {
        width: 100%;
        height: auto;
    }
</style>
