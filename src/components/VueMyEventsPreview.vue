<template>
    <div class="container-square">
        <div class="icon"><img src="@/assets/Grupo 328.png" alt=""></div>
        <span class="date">07/12/2019</span>
        <span class="title">Congresso Internacional de Design de Interface e Usabilidade</span>
        <span class="place-a">Hotel Holiday Inn Express</span>
        <span class="place-b">Maceió - AL</span>
        <div class="footer">
            <img class="img" style="margin-right: 1rem" src="@/assets/edit.png" alt="">
            <img class="img" src="@/assets/view.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueMyEventsPreview',
}
</script>

<style lang="stylus" scoped>
.container-square
    display flex
    flex-direction column
    max-width 44.8rem
    border-radius 1.5rem
    background #ffffff
    box-shadow 0 0.4rem 0.8rem rgba(25, 25, 25, 0.08)
    margin-top 4rem
    margin-right 2rem
    padding-left 3rem
.icon
    display flex
    justify-content flex-end
    margin-right 2rem
.date
    font-size 1.2rem
    color #868E96
    font-family 'Roboto', sans-serif
.title
    font-size 2.4rem
    color #495057
    font-family 'Roboto', sans-serif
    margin-top 2rem
    white-space nowrap; 
    overflow hidden
    text-overflow ellipsis
    margin-right 2rem
.place-a
    font-size 1.2rem
    color #868E96
    margin-top 3rem
.place-b
    font-size 1.2rem
    color #868E96 
.footer
    display flex
    margin-top 6rem
    justify-content flex-end
    margin-right 2rem
    margin-bottom 2.5rem
.img
    cursor pointer
</style>