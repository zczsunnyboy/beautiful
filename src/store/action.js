export default {
  async actionMessage({commit, state}, newobj) {
    commit('increment', newobj)
  },
  async actionError({commit, state}, newobj) {
    commit('incrementerror', newobj)
  }
}
