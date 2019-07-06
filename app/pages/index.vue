<template>
  <div class="container">
    <url-input-bar class="url-input-bar"/>
    <frame />
  </div>
</template>

<script>
import UrlInputBar from '~/components/UrlInputBar.vue'
import Frame from '~/components/Frame.vue'

export default {
  components: {
    UrlInputBar,
    Frame
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.url-input-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index:2;
}
.frame {
  z-index: 1;
}
</style>
