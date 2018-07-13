<template>
    <div class="container">
        <MenuButtons></MenuButtons>
        <themeMusic></themeMusic>
        <ALongTimeAgo></ALongTimeAgo>
    </div>
</template>


<script>
    import ALongTimeAgo from '@/components/ALongTimeAgo';
    import themeMusic from '@/components/themeMusic';
    import MenuButtons from '@/components/MenuButtons';
    export default {
        name: 'Home',
        components: {ALongTimeAgo,themeMusic,MenuButtons}


    }
</script>

<style lang="scss">
    .container {
        width: 100%;
        height: auto;
    }
</style>
