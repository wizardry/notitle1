<template>
  <div class="container">
    <training-form
      mode="edit"
      :training-id="$route.params.id"
    />
  </div>
</template>

<script>
import TrainingForm from '~/components/TrainingForm.vue';

export default {
  components: {
    TrainingForm,
  }
}
</script>

<style>
</style>
