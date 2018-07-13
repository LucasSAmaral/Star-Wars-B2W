<template>
    <div class="content__menu hide">
        <a class="content__menu--button" href="">Play Game</a>
        <a class="content__menu--button" href="">About Star Wars</a>
        <a class="content__menu--button" href="">About Me</a>
    </div>
</template>

<script>
    export default {
         name: 'ALongTimeAgo',
    }
</script>

<style lang="scss">
    .content {
        &__menu {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: -130px;
            transition: 4s;
            &.hide {
                opacity: 0;
            }

            &--button {
                font-family: 'News Cycle', sans-serif;
                background-color: #e1b100;
                color: #000;
                padding: 12px 15px;
                border-radius: 2px;
                text-decoration: none;
                margin-left: 15px;
                font-weight: bold;

                &:first-child {
                    margin-left: 0;
                }
            }
        }
    }
</style>
