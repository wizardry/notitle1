<template>
  <div class="placeholder" @mouseover="onOver" @mouseleave="onLeave">
    <form @submit.prevent="onSubmit" class="block" :class="blockClasses">
      <div class="section">
        <input type="text" class="input" @change="onInputChange">
      </div>
      <div class="section section--button">
        <button type="submit" class="button">get</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: '',
      hoverShow: false,
    };
  },
  computed: {
    blockClasses() {
      return {
        'block--hover': this.hoverShow
      }
    },
  },
  methods: {
    onInputChange(event) {
      this.src = event.target.value;
    },
    onSubmit(event){
      console.log(event, 'urlinputbar, onsubmit', this.src);
      this.$store.commit('frame/change', this.src)
    },
    onOver() {
      console.log('onover', this.hoverShow);
      this.hoverShow = true;
    },
    onLeave() {
      console.log('onLeave', this.hoverShow);
      this.hoverShow = false;
    },
  }
}

</script>
<style lang="scss" scoped>
.placeholder {
  height: 70px;
}

.block {
  box-sizing: border-box;
  background: rgba(0, 0, 0, .75);
  transition: all .3s ease-in-out;
  height: 0;
  padding: 0;
  display: flex;

  > .section {
    display: none;
  }

  &--hover {
    height: 70px;
    padding: 16px;

    > .section {
      display: block;
    }
  }
}

.section {
  flex: 1 1 auto;

  &:nth-child(n + 2) {
    margin-left: 8px;
  }

  &--button {
    flex: 0 0 120px;
  }
}

.input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
}

.button {
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 16px;
}
</style>
