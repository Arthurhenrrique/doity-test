<template>
<div class="container">
    <div class="nav">
        <div class="header">
            <span>Explore eventos ao redor do Brasil</span>
        </div>
        <div class="inputs">
            <input type="text" class="input lg" placeholder="Que tipo de evento você procura?" v-model="search" @keyup="searching(search)">
            <input type="text" class="input md" placeholder="Escolha uma área">
        </div>
        <div class="container-group">
            <vue-groups></vue-groups>
        </div>
    </div>        
</div>
</template>

<script>
import VueGroups from './VueGroups'

export default {
    name: 'VueSubnav',
    components: {
        VueGroups,
    },
    data() {
        return {
            search: '',
        }
    },
    methods: {
        searching(value) {
            const word = value
            this.$emit('searching', word)                
        }
    },
};
</script>

<style lang="stylus" scoped>

.container
    width 100%
.nav
    width auto
    background #FF2B34
    border-bottom-left-radius 5rem
    border-bottom-right-radius 5rem
    
.header
    font-family 'Roboto', sans-serif
    font-size 5.6rem
    color #ffffff
    margin-left 12rem
    display flex
    align-content center
    padding-top 5rem
.inputs
    margin-bottom 3rem
    margin-top 1rem
    margin-left 11rem
    display flex
.input
    box-shadow 0 0.4rem 0.8rem rgba(25, 25, 25, 0.08)
    padding-left 2rem
    outline none
    cursor text
    border-radius 10rem
    background #ffffff
    border none 
    margin 0 1rem
    color #C7C7C7
    font-size 1.2rem
    font-family 'Roboto', sans-serif
.lg
    max-width 78rem
    height 4rem
    width 100%
.md
    max-width 28rem
    height 4rem
    width 100%
.container-group
    padding-bottom 8rem

</style>