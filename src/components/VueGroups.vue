<template>
    <div class="groups">
        <div class="group">
                <img src="@/assets/Caminho 20.png" alt="acadêmicos">
                <span class="text">Acadêmicos</span>
        </div>
        <div class="group">
            <img src="@/assets/Caminho 22.png" alt="religiosos">
            <span class="text">Religiosos</span>
        </div>
        <div class="group">
            <img src="@/assets/Caminho 21.png" alt="esportivos">
            <span class="text">Esportivos</span>
        </div>
        <div class="group">
            <img src="@/assets/karaoke.png" alt="shows">
            <span class="text">Shows</span>
        </div>
        <div class="group">
            <img src="@/assets/cutlery.png" alt="gastronomicos" class="img">
            <span class="text">Gastronomicos</span>
        </div>
        <div class="group">
            <span class="text">Workshops</span>
        </div>
        <div class="group">
            <span class="text">Tecnologia</span>
        </div>
        <div class="group">
            <span class="text">Outros</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueGroups',
}
</script>

<style lang="stylus" scoped>
.text
    margin-bottom 2rem
.img
    margin-bottom 1.5rem
.groups
    display flex
    align-content center
    justify-content center
.group
    box-shadow 0 0.4rem 0.8rem rgba(25, 25, 25, 0.08)
    width 12.2rem
    height 12.2rem
    background #CC222A
    margin 0 1rem
    color #ECC3C3
    font-family 'Roboto', sans-serif
    font-size 1.2rem
    border-radius 2rem
    display flex
    align-content center
    flex-direction column
    align-items center
    justify-content flex-end
    cursor pointer
.group:hover
    box-shadow 0.8rem 0.8rem rgba(25, 25, 25, 0.1)
    width 13.2rem
    height 13.2rem
    font-size 1.5rem
    transition 0.1s
</style>