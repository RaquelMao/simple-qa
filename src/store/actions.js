/**
 * Created by Raquel on 2018/4/23.
 */
export default {
  addNum({ commit, state }, id) {
    commit('REMBER_ANSWER', id);
    if (state.itemNum < state.itemDetails.length) {
      commit('ADD_ITEMNUM', 1);
    }
  },
  initializeData({ commit }) {
    commit('INITIALIZE_DATA');
  },
}
