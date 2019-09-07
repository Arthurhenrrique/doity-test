<template>
    <button 
    :class="getStyles"
    type="button"
    @click="$emit('click')"
    >
    <slot />
    </button>
</template>

<script>
export default {
    name: 'VueButton',
    props: {
        type: {
            type: String,
            required: false,
            default: 'md',
            validator(value) {
                return ['md', 'sm'].indexOf(value) !== -1;
            },
        },
        shape: {
            type: String,
            required: false,
            default: 'primary',
            validator(value) {
            return ['primary', 'secondary', 'tertiary'].indexOf(value) !== -1;
            },
        }

    },
    computed: {
        getStyles() {
            return `btn ${this.shape} ${this.type}`;
        },
    }
    
};
</script>

<style lang="stylus" scoped>
.btn
    box-shadow 0 0.4rem 0.8rem rgba(25, 25, 25, 0.08)
    border-radius 10rem
    padding-left 0.8rem
    padding-right 0.8rem
    outline none
    cursor pointer
    font-family 'Roboto', sans-serif
    font-size 1.2rem
    margin 0 1rem
.md
    width 17rem
    height 4rem
.md:hover
    width 17.3rem
    height 4.3rem
    box-shadow 0.8rem 0.8rem rgba(25, 25, 25, 0.1)
    transition 0.1s
.sm
    width 11rem
    height 4rem
.sm:hover
    width 11.3rem
    height 4.3rem
    box-shadow 0.8rem 0.8rem rgba(25, 25, 25, 0.1)
    transition 0.1s
.primary
    color #FF2B34
    background #ffffff
    border none
.secondary
    color #ffffff
    background #FF2B34
    border 0.1rem solid
    border-color #ffffff
.tertiary
    background #21C13C
    color #FFFFFF
    border none
@media screen and (max-width: 1000px)
    .md
        width 12rem
    .sm
        width 7rem
</style>