<template>
  <div>
    <iframe
      :src="`${$store.state.frame.src}`"
      class="frame"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
<!--
  <iframe width="560" height="315" src="https://www.youtube.com/embed/pCWdI2-6HNk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-->

</template>
<script>

export default {
  data() {
  },
  computed: {
  },
  methods: {
  }
}

</script>
<style lang="scss" scoped>
.frame {
  position: fixed;
  top: 34px;
  left: 0;
  width: 100%;
  height: calc(100% - 34px);
}
</style>
