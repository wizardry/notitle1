export const state = () => ({
  src: ''
})

export const mutations = {
  change (state, src) {
    state.src = src;
  }
}
