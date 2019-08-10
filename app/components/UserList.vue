<template>
  <table>
    <thead>
      <th>id</th>
      <td>name</td>
      <td>gender</td>
      <td>weight</td>
      <td>comment</td>
    </thead>
    <tbody>
      <tr v-for="(user, index) in list.users">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.gender == 0 ? '男性' : '女性' }}</td>
        <td>{{ user.weight }}</td>
        <td>{{ user.comment }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      list: this.$store.state.users,
    };
  },
  props: {
    
  },
  computed: {
  },
}

</script>
<style lang="scss" scoped>
</style>
