<template>
    <div class="nav">
        <div><img class="img" src="@/assets/Grupo 55.png" alt="" @click="navigateTo('/home')"></div>
        <div class="container">
            <span class="text">CONHEÇA A DOITY</span>
            <span class="text">BLOG</span>
            <vue-button @click="navigateTo('/meusEventos/novo')">DIVULGAR EVENTO</vue-button>
            <vue-button shape="secondary" type="sm" @click="navigateTo('/meuseventos')">LOGIN</vue-button>
        </div>
    </div>
</template>

<script>
import VueButton from './VueButton'

export default {
    name: 'VueNav',
    components: {
        VueButton,
    },
    methods: {
        navigateTo(path) {
            this.$router.push(`${path}`)
        }
    },
};
</script>

<style lang="stylus" scoped>
.nav
    width auto
    height 10rem
    background #FF2B34
    display flex
    align-items center
    padding 0 12rem
    justify-content space-between
    padding-top 2rem
.container
    width auto
.trademark
    font-size 4rem
    color #ffffff
.text
    font-size 1.5rem
    color #ffffff
    font-family 'Roboto', sans-serif
    margin 0 2rem
    cursor pointer
.text:hover
    font-weight bold
    transition-delay 0.1s
.img
    cursor pointer
</style>