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
        width: 93%;
        justify-content: center;
        display: flex;
    }
}

</style>
