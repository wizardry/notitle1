<template>
  <div class="container">
    <user-form
      mode="edit"
      :user-id="$route.params.id"
    />
  </div>
</template>

<script>
import UserForm from '~/components/UserForm.vue';

export default {
  components: {
    UserForm,
  }
}
</script>

<style>
</style>
