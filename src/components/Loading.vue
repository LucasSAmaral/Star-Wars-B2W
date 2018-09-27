<template>
    <div class="loading__container">
        <img src="../assets/bb-8-loading.gif" alt="Loading">
    </div>    
</template>

<script>
    export default {
        name: 'Loading'
    }
</script>

<style lang="scss" scoped>

.loading {
    &__container {
        position: absolute;
        width: calc(100% - 20px);
        justify-content: center;
        display: flex;
        top: calc(50% - (245px/2));
        background-color: #000000;
    }
}

</style>
