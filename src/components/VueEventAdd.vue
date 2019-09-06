<template>
    <div>
        <vue-user-nav></vue-user-nav>
        <vue-event-add-form></vue-event-add-form>
    </div>
</template>

<script>
import VueUserNav from './VueUserNav'
import VueEventAddForm from './VueEventAddForm'

export default {
    name: 'VueEventAdd',
    components: {
        VueUserNav,
        VueEventAddForm,
    },
};
</script>

<style lang="stylus" scoped>

</style>