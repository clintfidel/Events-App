<template>
  <div class="wrapper container">
    <EventHeader />
    <EventSection />
  </div>
</template>

<script>
import EventHeader from "./EventHeader.vue"
import EventSection from "./EventSection"
export default {
  name: 'DashBoard',
  props: {
    msg: String
  },
  components: {
    EventHeader,
    EventSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper{
    overflow:visible
  }
</style>
