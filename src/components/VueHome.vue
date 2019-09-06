<template>
    <div>
        <vue-nav></vue-nav>
        <vue-subnav @searching="onType"></vue-subnav>
        <vue-pagination :sr="this.se"></vue-pagination>
    </div>
</template>

<script>
import VueSubnav from './VueSubnav'
import VueNav from './VueNav'
import VuePagination from './VuePagination'

export default {
    name: 'Home',
    components: {
        VueSubnav,
        VueNav,
        VuePagination,
    },
    data() {
        return {
            se: '',
        }
    },
    methods: {
        onType(value) {
            console.log(value)
            this.se = value
        }
    },
}
</script>

<style lang="stylus" scoped>

</style>