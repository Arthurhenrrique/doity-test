<template>
    <div>
        <vue-user-nav></vue-user-nav>
        <vue-events-tabs></vue-events-tabs>
        <div class="container-preview">
            <vue-my-events-preview></vue-my-events-preview>
            <vue-my-events-preview></vue-my-events-preview>
        </div>
    </div>
</template>

<script>
import VueUserNav from './VueUserNav'
import VueEventsTabs from './VueEventsTabs'
import VueMyEventsPreview from './VueMyEventsPreview'

export default {
    name: 'VueMyEvents',
    components: {
        VueUserNav,
        VueEventsTabs,
        VueMyEventsPreview,
    },
};
</script>

<style lang="stylus" scoped>
.container-preview
    display flex
    width auto
    justify-content center
    margin-left 7rem
    margin-bottom 20rem
</style>