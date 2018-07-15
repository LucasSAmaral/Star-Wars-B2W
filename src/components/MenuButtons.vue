<template>
    <div class="content__menu hide">
        <Buttons class="button" text="Play Game" path="planets"></Buttons>
        <Buttons class="button" text="About The App" path="abouttheapp"></Buttons>
        <Buttons class="button" text="About Me" path="aboutme"></Buttons>
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
            flex-direction: column;
            justify-content: center;
            padding: 10px;
            transition: 4s;

            @media (min-width: 767px) {
                margin-top: -130px;
                flex-direction: row;
                padding: 0;
            }

            &.hide {
                @media (min-width: 1024px) {
                    opacity: 0;
                }
            }
        }
    }
</style>
