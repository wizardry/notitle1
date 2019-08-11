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
      <tr v-for="(user) in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.gender == 0 ? '男性' : '女性' }}</td>
        <td>{{ user.weight }}</td>
        <td>{{ user.comment }}</td>
        <td>
          <nuxt-link :to="`/users/${ user.id }`">編集</nuxt-link>
          <button @click="onClickDelete(user.id)">削除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      users: this.$store.state.users,
    };
  },
  props: {
    
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
