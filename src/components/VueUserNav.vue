<template>
    <div class="container">
        <div class="nav">
            <img class="logo" src="@/assets/Grupo 55.png" alt="" @click="navigateTo('/home')">
            <div class="container-profile">
                <img class="img" src="@/assets/Objeto Inteligente de Vetor.png" alt="">
                <img class="img" src="@/assets/Notifications.png" alt="">
                <img class="user-img" src="@/assets/Image.png" alt="" @click="navigateTo('/meuseventos')">
                <div class="profile" @click="navigateTo('/meuseventos')">
                    <span class="profile-txt">Eduardo Leandro</span>
                    <span class="function-txt">Organizador</span>
                </div>
            </div>
        </div>
        <div class="sub-nav">
            <span class="text" @click="navigateTo('/home')">INÍCIO</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueUserNav',
    methods: {
        navigateTo(path) {
            this.$router.push(`${path}`)
        }
    },
};
</script>

<style lang="stylus" scoped>
.container
    width auto
.nav
    background #FF2B34
    width 100%
    display flex
    height 7.6rem
    align-items center
    justify-content space-between
.container-profile
    display flex
    align-items center
.profile
    display flex
    flex-direction column
    margin-right 10rem
    cursor pointer
.logo
    margin-left 10rem
    cursor pointer
.img
    margin-right 3rem
    cursor pointer
.user-img
    margin-right 1.5rem
    cursor pointer
.profile-txt
    font-size 1.275rem
    color #ffffff
    font-family 'Roboto', sans-serif
.function-txt
    font-size 0.991rem
    color #ffffff
    font-family 'Roboto',sans-serif
.sub-nav
    background #ffffff
    width 100%
    height 5.8rem
    display flex
    align-items center
.text
    font-size 1.2rem
    color #495057
    font-family 'Roboto',sans-serif
    margin-left 12rem
    cursor pointer
</style>