/**
 * Created by Raquel on 2018/4/26.
 */
import { ADD_ITEMNUM, REMBER_ANSWER, INITIALIZE_DATA } from './mutation-types';

const item = {
  state: {
    itemNum: 1, // 第几题
    itemDetails: [{
      topicId: 1,
      answer: [{
        answerId: 1,
        answerContent: 'a',
        isCorrectAnswer: true,
      }, {
        answerId: 2,
        answerContent: 'b',
        isCorrectAnswer: false,
      }, {
        answerId: 3,
        answerContent: 'c',
        isCorrectAnswer: false,
      }, {
        answerId: 4,
        answerContent: 'd',
        isCorrectAnswer: false,
      }],
    }, {
      topicId: 2,
      answer: [{
        answerId: 1,
        answerContent: 'aa',
        isCorrectAnswer: true,
      }, {
        answerId: 2,
        answerContent: 'bb',
        isCorrectAnswer: false,
      }, {
        answerId: 3,
        answerContent: 'cc',
        isCorrectAnswer: false,
      }, {
        answerId: 4,
        answerContent: 'dd',
        isCorrectAnswer: false,
      }],
    }, {
      topicId: 3,
      answer: [{
        answerId: 1,
        answerContent: 'aaa',
        isCorrectAnswer: false,
      }, {
        answerId: 2,
        answerContent: 'bbb',
        isCorrectAnswer: false,
      }, {
        answerId: 3,
        answerContent: 'ccc',
        isCorrectAnswer: true,
      }, {
        answerId: 4,
        answerContent: 'ddd',
        isCorrectAnswer: false,
      }],
    }],
    choosedAnswerId: [], // 答案id
  },
  mutations: {
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
  },
  actions: {
    AddNum({ state, commit }, id) {
      commit(REMBER_ANSWER, id);
      if (state.itemNum < state.itemDetails.length) {
        commit(ADD_ITEMNUM, 1);
      }
    },
    InitializeData({ commit }) {
      commit(INITIALIZE_DATA);
    },
  },
};

export default item;
