<template>
  <div id="app">
    <router-view />
    <vue-footer v-if="$route.name !== 'Ver Meus Eventos' && $route.name !== 'Adcionar Evento'" />
  </div>
</template>

<script>
import VueFooter from './components/VueFooter'

export default {
  name: 'app',
  components: {
    VueFooter,
  },

}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap')

.line
  width auto 
  border 0.05rem solid
  margin 0 0.2rem

html
  font-size 10px
  font-family 'Roboto', sans-serif

body
  margin 0
  height 100%
  background #EBEBEB
.pagination-link
  border none
  margin 0 1rem
  background #ffffff
  cursor pointer
  font-size 1.4rem
  font-family 'Roboto', sans-serif
.pagination-link--active
  outline none
  font-weight bold
.pagination-link:active
  outline none
.pagination
  display flex
  list-style none
  padding-top 1rem
  padding-right 4rem
  background #ffffff
  height 4rem
  border-radius 10rem
</style>
