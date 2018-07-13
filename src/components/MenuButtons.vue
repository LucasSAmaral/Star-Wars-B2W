<template>
    <div class="content__menu hide">
        <Buttons class="content__menu--button" text="Play Game" path="planets"></Buttons>
        <Buttons class="content__menu--button" text="About Star Wars" path="aboutstarwars"></Buttons>
        <Buttons class="content__menu--button" text="About Me" path="aboutme"></Buttons>
    </div>
</template>

<script>
    import Buttons from '@/components/Buttons'
    export default {
         name: 'MenuButtons',
         components: {Buttons}
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
