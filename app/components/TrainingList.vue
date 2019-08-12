<template>
  <table>
    <thead>
      <th>id</th>
      <td>date</td>
      <td>user</td>
      <td>weight</td>
      <td>comment</td>
      <td></td>
    </thead>
    <tbody>
      <tr v-for="(training) in trainings" :key="training.id">
        <td>{{ training.id }}</td>
        <td>{{ training.date }}</td>
        <td>{{ $store.getters['users/userById'](training.userId).name }}</td>
        <td>{{ training.weight }}</td>
        <td>{{ training.comment }}</td>
        <td>
          <nuxt-link :to="`/trainings/${ training.id }`">編集</nuxt-link>
          <button @click="onClickDelete(training.id)">削除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      trainings: this.$store.state.trainings,
    };
  },
  computed: {
  },
  methods: {
    onClickDelete(id) {
      console.log(id);
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
