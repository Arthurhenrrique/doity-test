<template>
    <div>
        <vue-event-nav></vue-event-nav>
        <vue-events-description :eve="this.events[$route.params.id]"></vue-events-description>
    </div>
</template>

<script>
import VueEventNav from './VueEventNav'
import Events from '../assets/Events'
import VueEventsDescription from './VueEventsDescription'

export default {
    name: 'VueEvent',
    components: {
        VueEventNav,
        VueEventsDescription,
    },
    data() {
        return {
          events: Events  
        }
    },
};
</script>

<style lang="stylus" scoped>

</style>