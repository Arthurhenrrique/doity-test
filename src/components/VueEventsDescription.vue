<template>
    <div class="container">
        <div class="imagem">
                <img class="img" :src="img" alt="">
        </div>
        <div class="container-info">
            <div class="date">
                <span class="day">{{eve.date.day}}</span>
                <span class="month">{{eve.date.month}}</span>
                <span class="hour">{{eve.date.hour}}</span>
            </div>
            <div class="info">
                <div class="sub-info">
                    <span class="type">MACEIÓ GASTRONOMICOS</span>
                    <div class="title-div">
                        <span class="eve-title">{{eve.title}}</span>
                        <img src="@/assets/kisspng-verified-badge-logo-youtube-5ae52f26e48bd5.9268580015249692549361-150x150.png" alt="">
                    </div>
                    <span class="place">{{eve.place}}</span>
                    <div style="margin-top: 3rem">
                        <span class="share">COMPARTILHE</span>
                        <img class="social" src="@/assets/06-facebook-512.png" alt="">
                        <img class="social" src="@/assets/23931.png" alt="">
                        <img class="social" src="@/assets/34227.png" alt="">
                    </div>
                </div>
                <div class="buy">
                    <vue-button shape="tertiary">COMPRAR INGRESSOS</vue-button>
                </div>
            </div>
        </div>
        <div class="container-des">
            <span class="header">SOBRE O EVENTO</span>
            <span class="des">{{eve.descricao}}</span>
        </div>
        <div class="map">
            <vue-google-map></vue-google-map>
        </div>
    </div>
</template>

<script>
import VueButton from './VueButton'
import VueGoogleMap from './VueGoogleMap'

export default {
    name: 'VueEventsDescription',
    components: {
        VueButton,
        VueGoogleMap,
    },
    props: {
        eve: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            img: require('@/assets/' + this.eve.image)
        }
    },
};
</script>

<style lang="stylus" scoped>
.container
    width auto
    display flex
    margin-left 15rem
    margin-top 2rem
    flex-direction column
    border-radius 5rem
.imagem
    max-width 100rem
    display flex
    box-shadow 0 0.4rem 0.8rem rgba(25, 25, 25, 0.08)
.container-info
    height 20rem
    max-width 100rem
    display flex
    flex-direction row
.info
    width 88rem
    background #ffffff
    border-bottom-right-radius 2.5rem
    display flex
    justify-content space-between
    box-shadow 0 0.4rem 0.8rem rgba(25, 25, 25, 0.08)
.date
    width 12rem
    display flex
    flex-direction column
    background #F6F6F6
    border-bottom-left-radius 2.5rem
    align-items center
    box-shadow 0 0.4rem 0.8rem rgba(25, 25, 25, 0.08)
.day
    font-size 5.2rem
    color #495057
    font-family 'Roboto', sans-serif
    margin-top 3.5rem
.month
    font-size 2.1rem
    color #8193AE
    font-family 'Roboto', sans-serif
.hour
    font-size 1.4rem
    color #B9C6CA
    font-family 'Roboto', sans-serif
    margin-top 3rem
.sub-info
    display flex
    flex-direction column
.type
    font-size 1rem
    color #8B93A6
    font-family 'Roboto', sans-serif
    margin-left 2rem
    margin-top 3rem
.title-div
    display flex
    margin-top 1rem
    align-items center
.eve-title
    font-size 2.7rem
    color #404D66
    font-family 'Roboto', sans-serif
    margin-right 1rem
    margin-left 2rem
.place
    font-size 1.4rem
    color #8193AE
    font-family 'Roboto', sans-serif
    margin-left 2rem
    margin-top 1rem
.share
    font-size 1.1rem
    color #404D66
    font-family 'Roboto', sans-serif
    margin-right 1rem
    margin-left 2rem
.buy
    display flex
    align-items center
    margin-right 5rem
.container-des
    display flex
    flex-direction column
    margin-top 2rem
    max-width 100rem
    border-radius 2rem
    background #ffffff
    padding-bottom 5rem
    min-height 45rem
    box-shadow 0 0.4rem 0.8rem rgba(25, 25, 25, 0.08)
.header
    font-size 1.4rem
    color #404D66
    font-family 'Roboto', sans-serif
    font-weight bold
    margin-top 4rem
    margin-left 4rem
    margin-right 4rem
.des
    font-size 1.5rem
    color #404D66
    font-family 'Roboto', sans-serif
    margin-top 5rem
    margin-left 4rem
    margin-right 4rem
.map
    max-width 100rem
    margin-top 2rem
    margin-bottom 8rem
.img
    width 100%
.social
    margin-left 2rem
</style>