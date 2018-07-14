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
                font-weight: bold;
                border: none;
                font-size: 16px;
                cursor: pointer;
                margin-bottom: 20px;
                text-align: center;

                @media (min-width: 767px) {
                    margin-bottom: 0;
                    margin-left: 15px;
                }

            &:first-child {
                margin-left: 0;
            }
        }
</style>
