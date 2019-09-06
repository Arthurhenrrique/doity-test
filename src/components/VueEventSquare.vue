<template>
    <div class="preview" @click="navigateTo(`/evento/${id}`)">
        <img :src="img" alt="" class="img">
        <span class="date">
            {{eve.date.day}}
            {{eve.date.month}}
            {{eve.date.year}}
        </span>
        <span class="title">
            {{eve.title}}
        </span>
        <span class="place">
            {{eve.place}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'VueEventSquare',
    props: {
        eve:{
            type: Object,
            required: true,
        },
        id:{
            type: Number,
            required: true,
        },
    },
    data() {
        return {
           img: require('@/assets/' + this.eve.preview)
        }
    },
    methods: {
        navigateTo(path) {
            this.$router.push(`${path}`);
        }
    },
}
</script>

<style lang="stylus" scoped>
.preview
    max-width 25rem
    max-height 21rem
    width 100%
    height 100%
    border-radius 1.2rem
    margin 2rem 1rem
    background #ffffff
    box-shadow 0 1rem 1rem rgba(25, 25, 25, 0.08)
    cursor pointer
    display flex
    flex-direction column
.preview:hover
    max-width 25.3rem
    max-height 21.3rem
    box-shadow 0.8rem 0.8rem rgba(25, 25, 25, 0.1)
    transition-delay 0.1s
.img
    width 100%
    border-radius 1.2rem
.date
    margin-top 1.5rem
    margin-left 2rem
    font-size 1rem
    color #616161
    font-family 'Roboto', sans-serif
.title
    font-size 1.8rem
    color #000000
    font-family 'Roboto', sans-serif
    margin-top 0.5rem
    margin-left 2rem
.place
    font-size 1rem
    color #616161
    font-family 'Roboto', sans-serif
    margin-top 1rem
    margin-left 2rem
    margin-bottom 3rem
</style>