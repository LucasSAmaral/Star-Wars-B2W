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
     .button {
                font-family: 'News Cycle', sans-serif;
                background-color: #e1b100;
                color: #000;
                padding: 12px 15px;
                border-radius: 2px;
                text-decoration: none;
                margin-left: 15px;
                font-weight: bold;
                border: none;
                font-size: 16px;
                cursor: pointer;

            &:first-child {
                margin-left: 0;
            }
        }
</style>
