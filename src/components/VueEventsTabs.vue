<template>
    <div class="container">
        <div class="container-header">
            <span class="header">Eventos</span>
            <vue-button shape="secondary" @click="navigateTo('/meusEventos/novo')">Divulgar evento</vue-button>
        </div>
        <div class="container-tabs">
            <span class="text">Todos(2)</span>
            <span class="text">Publicados(2)</span>
            <span class="text">Não Publicados(0)</span>
            <span class="text">Antigos(4)</span>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
import VueButton from './VueButton'

export default {
    name: 'VueEventsTabs',
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
.container
    width auto
    display flex
    margin-top 3rem
    flex-direction column
    margin-left 20rem
    margin-right 15rem
.container-header
    width 100%
    display flex
    align-items center
    justify-content space-between
.header
    font-size 3rem
    color #495057
    font-family 'Roboto',sans-serif
.secondary
    border none
.container-tabs
    width auto
    display flex
    margin-top 3rem
.text
    font-size 1.4rem
    color #868E96
    font-family 'Roboto', sans-serif
    margin-right 4rem
    cursor pointer
.line
    width 100%
    height 0.3rem
    background #DFE2E9
    margin-top 1rem
    border none
</style>