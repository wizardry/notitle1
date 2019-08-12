<template>
  <div class="container">
    <div>
      <user-list />
      <user-form />
      <user-form mode="edit" user-id="0" />
      <p>{{ users }}</p>
    </div>
    <div>
      <training-list />
      <training-form />
      <training-form mode="edit" user-id="0" />
    </div>
  </div>
</template>

<script>
import UserList from '~/components/UserList.vue'
import UserForm from '~/components/UserForm.vue'
import TrainingList from '~/components/TrainingList.vue'
import TrainingForm from '~/components/TrainingForm.vue'

export default {
  components: {
    UserForm,
    UserList,
    TrainingList,
    TrainingForm,
  },
  computed: {
    users() {
      return JSON.stringify(this.$store.state.users);
    }
  },
}
</script>

<style>
</style>
