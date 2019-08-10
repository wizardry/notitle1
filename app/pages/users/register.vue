<template>
  <div class="container">
    <user-form />
  </div>
</template>

<script>
import UserForm from '~/components/UserForm.vue'

export default {
  components: {
    UserForm,
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
