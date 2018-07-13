<template>
    <div class="container">
        <ImageLogo></ImageLogo>
        <MenuButtons></MenuButtons>
        <themeMusic></themeMusic>
        <ALongTimeAgo></ALongTimeAgo>
    </div>
</template>


<script>
    import ImageLogo from '@/components/ImageLogo'
    import ALongTimeAgo from '@/components/ALongTimeAgo';
    import themeMusic from '@/components/themeMusic';
    import MenuButtons from '@/components/MenuButtons';
    export default {
        name: 'Home',
        components: {ImageLogo,ALongTimeAgo,themeMusic,MenuButtons}


    }
</script>

<style lang="scss">
    .container {
        width: 100%;
        height: auto;
    }
</style>
