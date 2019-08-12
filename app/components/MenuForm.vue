<template>
  <div ref="menuForm">
    <dl>
      <dt>name</dt>
      <dd>
        <input
          type="text"
          name="menu[name]"
          :value="name"
          @change="onChange"
        />
      </dd>
    </dl>
    <dl>
      <dt>回数</dt>
      <dd>
        <input
          type="number"
          name="menu[count]"
          :value="count"
          @change="onChange"
        /> 回
      </dd>
    </dl>
    <dl>
      <dt>負荷量</dt>
      <dd>
        <input
          type="number"
          name="menu[weight]"
          step="0.1"
          :value="weight"
          @change="onChange"
        />Kg
      </dd>
    </dl>
    <dl>
      <dt>時間</dt>
      <dd>
        <input
          type="number"
          name="menu[minute]"
          step="0.1"
          :value="minute"
          @change="onChange"
        /> 秒or分
      </dd>
    </dl>
    <dl>
      <dt>comment</dt>
      <dd>
        <textarea
          name="menu[comment]"
          @change="onChange"
        >{{ comment }}</textarea>
      </dd>
    </dl>
    <button
      v-if="isRegistMode"
      type="button"
      @click="onClickRegist"
    >
      追加
    </button>
    <button
      type="button"
      @click="onClickDelete"
    >
      削除
    </button>
  </div>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'regist'
    },
    name: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: null,
    },
    minute: {
      type: Number,
      default: null,
    },
    weight: {
      type: Number,
      default: null,
    },
    comment: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: null,
    }
  },
  computed: {
    isRegistMode() {
      return this.mode === 'regist';
    },
  },
  methods: {
    onClickDelete() {
      console.log('delete')
    },
    value() {
      const form = this.$refs.menuForm;
      return {
        name: form.querySelector('[name="menu[name]"]').value,
        count: parseFloat(form.querySelector('[name="menu[count]"]').value),
        minute: parseFloat(form.querySelector('[name="menu[minute]"]').value),
        weight: parseFloat(form.querySelector('[name="menu[weight]"]').value),
        comment: form.querySelector('[name="menu[comment]"]').value,
      };
    },
    onClickRegist() {
      this.$emit('add-menu', this.value());
      const form = this.$refs.menuForm;
      form.querySelector('[name="menu[name]"]').value = '';
      form.querySelector('[name="menu[count]"]').value = '';
      form.querySelector('[name="menu[minute]"]').value = '';
      form.querySelector('[name="menu[weight]"]').value = '';
      form.querySelector('[name="menu[comment]"]').value = '';
    },
    onChange() {
      this.$emit('change-menu', {
        index: this.index,
        value: this.value(),
      });
    }
  },
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
