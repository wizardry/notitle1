<template>
  <form @submit.prevent="onSubmit">
    <dl>
      <dt>isDone</dt>
      <dd>
        <input
          type="checkbox"
          name="done"
          value="1"
          :checked="training.isDone === '1'"
        />
      </dd>
    </dl>
    <dl>
      <dt>date</dt>
      <dd>
        <input
          type="date"
          name="date"
          :value="training.date"
        />
      </dd>
    </dl>
    <dl>
      <dt>user</dt>
      <dd>
        <select name="userId">
          <option v-for="user in $store.state.users" :value="user.id">
            {{ user.name }}
          </option>
        </select>
      </dd>
    </dl>
    <dl>
      <dt>weight</dt>
      <dd>
        <input
          type="number"
          name="weight"
          step="0.1"
          :value="training.weight"
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
          :value="training.fat"
        />%
      </dd>
    </dl>
    <dl>
      <dt>calorie</dt>
      <dd>
        <input
          type="number"
          name="calorie"
          step="0.1"
          :value="training.calorie"
        /> kcal
      </dd>
    </dl>
    <dl>
      <dt>Menu</dt>
      <dd>
        <menu-form
          mode="regist"
          @add-menu="onClickAddMenu"
        />
        <div v-for="(menu, index) in tmpMenus">
          <menu-form
            ref="menu"
            mode="edit"
            :name="menu.name"
            :count="menu.count"
            :minute="menu.minute"
            :weight="menu.weight"
            :comment="menu.comment"
            @change-menu="onChangeMenu"
            :index="index"
          />
        </div>
      </dd>
    </dl>
    <dl>
      <dt>comment</dt>
      <dd>
        <textarea name="comment">{{ training.comment }}</textarea>
      </dd>
    </dl>
    <button type="submit">{{ modeSubmitText }}</button>
  </form>
</template>
<script>
/*
            <!-- :name="menu.name"
            :count="menu.count"
            :minute="menu.minute"
            :weight="menu.weight"
            :comments="menu.comments" -->
*/
import MenuForm from '~/components/MenuForm.vue';

export default {
  components: {
    MenuForm,
  },
  data() {
    return {
      training: this.mode === 'regist' ? {} : { ...this.$store.getters['trainings/trainingById'](this.trainingId) },
      tmpMenus: [],
    }
  },
  props: {
    mode: {
      type: String,
      default: 'regist'
    },
    trainingId: {
      type: String,
      default: ''
    },
  },
  computed: {
    modeSubmitText() {
      return this.mode === 'regist' ? '登録' : '編集';
    },
    users() {
      return this.$store.state.user;
    },
    menus() {
      const training = this.$store.getters['trainings/trainingById'](this.trainingId);
      return training && training.menus ? [...training.menus] : []; 
    }
  },
  methods: {
    onClickAddMenu(value) {
      console.log('onClickAddMenu', value);
      this.tmpMenus.push(value);
    },
    onChangeMenu(menuValue) {
      this.tmpMenus.splice(menuValue.index, 1, menuValue.value);
    },
    onSubmit(event){
      const form = event.target;
      const values = {
        date: form.date.value,
        userId: form.userId.value,
        weight: form.weight.value,
        calorie: form.calorie.value,
        fat: form.fat.value,
        isDone: form.done.checked,
        comment: form.comment.value,
        menus: this.tmpMenus,
      };
      if (this.mode === 'regist') {
        this.$store.commit('trainings/regist', values);
      } else {
        this.$store.commit('trainings/edit', { ...values, id: this.trainingId });
        this.$router.push('/trainings');
      }
    },
  },
  mounted() {
    this.tmpMenus = this.menus;
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
