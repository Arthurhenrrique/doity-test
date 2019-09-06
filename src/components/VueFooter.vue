<template>
    <div class="footer">
        <div>
            <img class="img" src="@/assets/Grupo 144.png" alt="doity logo" @click="navigateTo('/home')">
            <span class="text">SOBRE A DOITY</span>
            <span class="text">BLOG</span>
        </div>
        <div>
            <img class="logo" src="@/assets/facebook.png" alt="">
            <img class="logo" src="@/assets/instagram.png" alt="">
            <img class="logo" src="@/assets/in.png" alt="">
            <img class="logo" src="@/assets/twitter.png" alt="">
            <img class="logo" src="@/assets/youtube.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueFooter',
    methods: {
        navigateTo(path) {
            this.$router.push(`${path}`)
        }
    }
};
</script>

<style lang="stylus" scoped>
.footer
    width auto
    height 13rem
    background #333333
    display flex
    align-items center
    padding 0 5rem
    justify-content space-between
    margin-top 2rem
.img
    margin 0 3rem
    cursor pointer
.logo
    margin-right 1rem
    cursor pointer
.text
    color #ffffff
    font-family 'Roboto', sans-serif
    font-size 1.5rem
    margin 0 2rem
    cursor pointer
</style>