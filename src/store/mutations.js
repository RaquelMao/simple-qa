/**
 * Created by Raquel on 2018/4/23.
 */
const ADD_ITEMNUM = 'ADD_ITEMNUM';
const REMBER_ANSWER = 'REMBER_ANSWER';
const INITIALIZE_DATA = 'INITIALIZE_DATA';
export default {
  [ADD_ITEMNUM](state, num) {
    state.itemNum += num;
  },
  [REMBER_ANSWER](state, id) {
    state.choosedAnswerId.push(id);
  },
  [INITIALIZE_DATA](state) {
    state.itemNum = 1;
    state.choosedAnswerId = [];
  },
}
