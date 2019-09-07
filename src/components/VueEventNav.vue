<template>
    <div class="nav">
        <div class="first">
            <div>
            <img class="img" src="@/assets/Grupo 55.png" alt="" @click="navigateTo('/home')">
            </div>
            <input type="text" class="input imd" placeholder="Escolha uma área">
        </div>
        <div class="second">
            <span class="text">CONHEÇA A DOITY</span>
            <span class="text">BLOG</span>
            <vue-button>DIVULGAR EVENTO</vue-button>
            <vue-button shape="secondary" type="sm" @click="navigateTo('/meuseventos')">LOGIN</vue-button>
        </div>
    </div>
</template>

<script>
import VueButton from './VueButton'

export default {
    name: 'VueEventNav',
    components: {
        VueButton,
    },
    methods: {
        navigateTo(path) {
            this.$router.push(`${path}`)
        }
    }
};
</script>

<style lang="stylus" scoped>
.first
    display flex
.second
    display flex
.nav
    width auto
    height 10rem
    background #FF2B34
    display flex
    align-items center
    padding 0 5rem
    justify-content space-between
    border-bottom-left-radius 5rem
    border-bottom-right-radius 5rem 
.input
    box-shadow 0 0.4rem 0.8rem rgba(25, 25, 25, 0.08)
    padding-left 2rem   
    outline none
    cursor text
    border-radius 10rem
    background #ffffff
    border none 
    color #C7C7C7
    font-size 1.2rem
    font-family 'Roboto', sans-serif
    margin-left 2rem
.imd
    min-width 28rem
    height 4rem
.text
    font-size 1.5rem
    color #ffffff
    font-family 'Roboto', sans-serif
    margin-top 1rem
    margin-right 2rem
    cursor pointer
.img
    cursor pointer
    margin-left 6rem
    margin-top 0.8rem
@media screen and (max-width: 1080px)
    .text
        display none
@media screen and (max-width: 800px)
    .imd
        min-width unset
@media screen and (max-width: 610px)
    .imd
        display none
</style>