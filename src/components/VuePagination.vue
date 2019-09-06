<template>
<div>
    <span v-if="sr !== ''" class="text">Foram encontrados {{(paginatedData.length)*pageCount}} resultados para '{{sr}}':</span>
    <div v-if="sr !== ''" class="container">
        <vue-event-square v-for="(event, i) in paginatedData" :key="i" :eve="event" :id="catchId(i)"></vue-event-square>
    </div>
    <div v-else class="container-empty">
        <span class="texto">Procure por Eventos!</span>
    </div>
    <div>
        <div v-if="sr !== ''" class="pag" >
            <v-pagination v-model="currentPage" :page-count="pageCount"></v-pagination>
        </div>
        <div v-else class="pag" >
            <v-pagination v-model="currentPage" :page-count="1"></v-pagination>
        </div>
    </div>
</div>
</template>

<script>
import Events from '../assets/Events'
import VueEventSquare from './VueEventSquare'
import vPagination from 'vue-plain-pagination'
import Vue2Filters from 'vue2-filters'

export default {
    name: 'VuePagination',
    data() {
        return {
            myevent: Events,
            currentPage: 1,
            size: 12,
        }
    },
    props: {
        sr: {
            type: String,
            required: true,
        },
    },
    components: {
        VueEventSquare,
        vPagination,
    },
    mixins: [Vue2Filters.mixin],
    computed: {
        pageCount () {
            const l = this.filterBy(this.myevent, this.sr, 'title').length,
            s = this.size
            return Math.ceil(l/s);
        },
        paginatedData () {
            let page = this.currentPage
            const start = (page-1) * this.size,
            end = start + this.size;
            return this.filterBy(this.myevent, this.sr, 'title').slice(start, end);
        }
    },
    methods: {
        catchId(i) {
            const id = i + ((this.currentPage -1 )*this.size)
            return id
        }
    }
};
</script>

<style lang="stylus" scoped>
.container
    width auto
    display flex
    flex-direction column
    flex-flow wrap
    margin-top 5rem
    margin-left 10rem
    margin-right 10rem
    justify-content center
.container-empty
    width auto
    display flex
    height 50rem
    align-items center
    justify-content center
.pag
    display flex
    width auto
    margin-bottom 10rem
    margin-top 2rem
    justify-content center
.texto
    font-size 5rem
    color #8193AE
    font-family 'Roboto', sans-serif
.text
    display flex
    margin-top 4rem
    justify-content center
    font-size 2.8rem
    color #313131
    font-family 'Roboto', sans-serif
</style>