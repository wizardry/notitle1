<template>
  <form @submit.prevent="onSubmit">
    <dl>
      <dt>name</dt>
      <dd>
        <input
          type="text"
          name="name"
          :value="user.name"
        />
      </dd>
    </dl>
    <dl>
      <dt>age</dt>
      <dd>
        <input
          type="number"
          name="age"
          :value="user.age"
        />歳
      </dd>
    </dl>
    <dl>
      <dt>gender</dt>
      <dd>
        male
        <input
          type="radio"
          value="0"
          name="gender"
          :checked="user.gender === '0'"
        />
      </dd>
      <dd>
        famale
        <input
          type="radio"
          value="1"
          name="gender"
          :checked="user.gender === '1'"
        />
      </dd>
    </dl>
    <dl>
      <dt>height</dt>
      <dd>
        <input
          type="number"
          name="height"
          :value="user.height"
        />cm
      </dd>
    </dl>
    <dl>
      <dt>weight</dt>
      <dd>
        <input
          type="number"
          name="weight"
          step="0.1"
          :value="user.weight"
        />Kg
      </dd>
    </dl>
    <dl>
      <dt>fat</dt>
      <dd>
        <input
          type="number"
          name="fat"
          step="0.1"
          :value="user.fat"
        />%
      </dd>
    </dl>
    <dl>
      <dt>comment</dt>
      <dd>
        <textarea name="comment">{{ user.comment }}</textarea>
      </dd>
    </dl>
    <button type="submit">{{ modeSubmitText }}</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      user: this.mode === 'regist' ? {} : { ...this.$store.getters['users/userById'](this.userId) }
    }
  },
  props: {
    mode: {
      type: String,
      default: 'regist'
    },
    userId: {
      type: String,
      default: ''
    },
  },
  computed: {
    modeSubmitText() {
      return this.mode === 'regist' ? '登録' : '編集';
    },
    userTemp() {
      return this.mode === 'regist' ? {} : { ...this.$store.getters['users/userById'](this.userId) };
    }
  },
  methods: {
    onSubmit(event){
      const form = event.target
      const values = {
        name: form.name.value,
        gender: form.gender.value,
        age: form.age.value,
        height: form.height.value,
        weight: form.weight.value,
        fat: form.fat.value,
        comment: form.comment.value,
      };
      if (this.mode === 'regist') {
        this.$store.commit('users/regist', values);
      } else {
        this.$store.commit('users/edit', { ...values, id: this.userId });
        this.$router.push('/users');
      }
    },
  }
}

</script>
<style lang="scss" scoped>
form {
  border: 1px solid #ccc;
  padding: 8px;

  dl {
    display: flex;
    margin-top: 8px;
  }
  dt {
    width: 200px;
  }
  input {
    margin-right: 4px;
  }
}
</style>
